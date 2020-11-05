<template>
  <div class="ledger-summary-container">
    
    <management-options />
    
    <div class="col-md-11 col-sm-12 mx-auto mt-4 row">
      <div class="col-md-4 col-sm-12">
        <div class="col-12 mt-4 border bg-light shadow-sm p-3 row m-0 rounded-lg">
          <div class="col-8">
            <span v-on:click="redirect('/wallet')" class="font-weight-bold text-primary link">E-Wallet Balance</span>
          </div>
          <div class="col-auto ml-auto m=0">
            <button type="button" class="dropdown border-0 options rounded-circle" data-toggle="dropdown" id="balanceSettings" aria-haspopup="true" aria-expanded="false">
              <div class="sr-only">Balance Settings</div>
              <i class="fa fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right shadow-sm rounded" aria-labelledby="balanceSettings">
              <div class="dropdown-item" @click="redirect('/wallet')">
                Go to E-Wallet Balance
              </div>
              <!-- <div class="dropdown-item">
                Get Help
              </div> -->
            </div>
          </div>
          <div class="col-12">
            <span class="balance">
              {{balance !== null ? currency.displayWithCurrency(largest.balance, largest.currency) : 'No available balance'}}
            </span>
            <br>
            <span class="font-weight-bold text-muted" style="opacity: .7">{{balance === null ? '' : balance.length > 1 ? 'More Currency Available' : 'Available'}}</span>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-sm-12 row">
        <div class="col-12" v-if="balance !== null && largest.balance > 0">
          <button type="button" class="btn btn-outline-primary rounded-pill pull-right" @click="redirect('/admin/transfer/create')">Transfer Funds</button>
        </div>
        <empty v-if="data === null" :title="'No transaction yet!'" :action="'Start transfering funds.'"></empty>
      </div>
    </div>
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
import CURRENCY from 'src/services/currency.js'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
import Pager from 'src/components/increment/generic/pager/Pager.vue'
import promosModal from './PromosModal.js'
export default {
  data(){
    return {
      user: AUTH.user,
      data: null,
      auth: AUTH,
      limit: 5,
      activePage: 1,
      numPages: null,
      modalProperty: promosModal,
      currency: CURRENCY,
      largest: {balance: 0},
      balance: null,
      ledger: null,
      withdraw: null
    }
  },
  components: {
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'basic-filter': require('components/increment/generic/filter/Basic.vue'),
    'management-options': require('modules/admin/Menu.vue'),
    Pager
  },
  mounted(){
    if(this.user.type !== 'ADMIN' && this.user.type !== 'BUSINESS_ADMIN' && this.user.type !== 'ACCOUNTING'){
      ROUTER.push('/marketplace')
    }
    this.retrieve()
  },
  methods: {
    redirect(params){
      ROUTER.push(params)
    },
    retrieve() {
      let par = {
        account_id: this.user.userID,
        account_code: this.user.code,
        offset: 0,
        limit: 3
      }
      $('#loading').css({display: 'block'})
      this.APIRequest('ledger/history', par).then(response => {
        $('#loading').css({display: 'none'})
        if(response.data.length > 0) {
          this.ledger = response.data
        } else {
          this.ledger = null
        }
      })
      let walletPar = {
        account_id: this.user.userID,
        account_code: this.user.code
      }
      this.APIRequest('ledger/summary', walletPar).then(response => {
        if(response.data.length > 0) {
          this.balance = response.data
        } else {
          this.balance = null
        }
        if(this.balance !== null) {
          this.balance.map((bal, ind) => {
            if(bal.balance >= this.largest.balance) {
              this.largest = bal
            }
          })
        }
      })
    }
  }
}
</script>
