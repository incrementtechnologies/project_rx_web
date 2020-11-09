<template>
  <div class="ledger-summary-container">
    <management-options />
    <table class="table table-bordered table-responsive" v-if="data !== null">
      <thead>
        <tr>
          <td>Date</td>
          <td>Name</td>
          <td>Via</td>
          <td>Amount</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{item.date_human}}</td>
          <td>{{item.name}}</td>
          <td class="text-uppercase">
            <b>{{item.payload}}</b>
            <br>
            {{JSON.parse(item.payload_value).account_name}}
            <br>
            {{JSON.parse(item.payload_value).account_number}}
          </td>
          <td>{{currency.displayWithCurrency(item.amount, item.currency)}}</td>
          <td>
            <label class="badge text-uppercase" :class="{'badge-warning': item.status === 'pending' || item.status === 'processing', 'badge-success': item.status === 'completed', 'badge-danger': item.status === 'declined'}">{{item.status}}</label>
          </td>
          <td>
              <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-cog"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click="change(item, 'PROCESSING')"><i class="fas fa-hand-holding-usd"></i>Processing</a>
                <a class="dropdown-item" @click="changeStatus(item, 'DECLINE')"><i class="fa fa-times"></i>  &nbsp;&nbsp;&nbsp;Decline</a>
                <a class="dropdown-item" @click="changeStatuss(item, 'COMPLETE')"><i class="fa fa-check"></i> &nbsp;&nbsp;Complete</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pager
      :pages="numPages"
      :active="activePage"
      :limit="limit"
      v-if="data !== null"
      />

    <Confirmations
    ref="confirms"
    :title="'Confirmation'"
    :message="confirmAction === 'complete' || confirmAction === 'processing' ? 'Are you sure you want to deal with this request?' : 'Are you sure you want to decline this request?'"
    @onConfirm="confirm($event)"
    />

    <empty v-if="data === null" :title="'No deposits available!'" :action="'Waiting for request.'"></empty>
  </div>
</template>
<style lang="scss" scoped> 
@import "~assets/style/colors.scss";
.bg-primary{
  background-color: $primary !important; 
  color: white !important;
}
.fa{
  padding-right: 0px !important;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import CURRENCY from 'src/services/currency.js'
import COMMON from 'src/common.js'
import Pager from 'src/components/increment/generic/pager/Pager.vue'
import Confirmations from 'src/components/increment/generic/modal/Confirmation.vue'
import propertyModal from './DeliveryFeeModal.js'
export default{
  mounted(){
    if(this.user.type !== 'ADMIN' && this.user.type !== 'BUSINESS_ADMIN' && this.user.type !== 'ACCOUNTING' && this.user.type !== 'MKTG'){
      ROUTER.push('/marketplace')
    }
    this.retrieve()
  },
  data(){
    return {
      user: AUTH.user,
      data: null,
      auth: AUTH,
      limit: 5,
      activePage: 1,
      numPages: null,
      currency: CURRENCY,
      confirmAction: ''
    }
  },
  components: {
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'basic-filter': require('components/increment/generic/filter/Basic.vue'),
    'management-options': require('modules/admin/Menu.vue'),
    'increment-modal': require('components/increment/generic/modal/Modal.vue'),
    Pager,
    Confirmations
  },
  methods: {
    retrieve(){
      let parameter = {
        sort: {
          status: 'desc'
        },
        limit: this.limit,
        offset: (this.activePage > 0) ? ((this.activePage - 1) * this.limit) : this.activePage
      }
      this.APIRequest('deposits/retrieve_requests', parameter).then(response => {
        $('#loading').css({display: 'none'})
        if(response.data.length > 0){
          this.data = response.data
          this.numPages = parseInt(response.size / this.limit) + (response.size % this.limit ? 1 : 0)
        }else{
          this.data = null
          this.numPages = null
        }
      })
    },
    change(item){
      this.confirmAction = 'processing'
      this.id = item.id
      this.$refs.confirms.show(item)
    },
    changeStatus(item){
      this.confirmAction = 'decline'
      this.id = item.id
      this.$refs.confirms.show(item)
    },
    changeStatuss(item){
      this.confirmAction = 'complete'
      this.id = item.id
      this.$refs.confirms.show(item)
    },
    confirm(item){
      if(this.confirmAction === 'complete'){
        this.complete(item)
      }else if(this.confirmAction === 'decline'){
        this.decline(item)
      }else{
        this.processing(item)
      }
    },
    complete(item){
      let parameter = {
        id: item.id.id,
        status: 'completed'
      }
      this.APIRequest('deposits/update', parameter).then(response => {
        if(response.data === true){
          item.status = 'completed'
          this.retrieve()
        }else{
          response.data = null
        }
      })
    },
    decline(item){
      let parameter = {
        id: item.id.id,
        status: 'declined'
      }
      this.APIRequest('deposits/update', parameter).then(response => {
        if(response.data === true){
          item.status = 'declined'
          this.retrieve()
        }else{
          response.data = null
        }
      })
    },
    processing(item){
      let parameter = {
        id: item.id.id,
        status: 'processing'
      }
      this.APIRequest('deposits/update', parameter).then(response => {
        if(response.data === true){
          item.status = 'processing'
          this.retrieve()
        }else{
          response.data = null
        }
      })
    }
  }
}
</script>
