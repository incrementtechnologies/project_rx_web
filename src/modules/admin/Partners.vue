<template>
  <div class="ledger-summary-container">
    
    <management-options />

    <basic-filter 
      v-bind:category="category" 
      :activeCategoryIndex="0"
      :activeSortingIndex="0"
      @changeSortEvent="retrieve($event.sort, $event.filter)"
      @changeStyle="manageGrid($event)"
      :grid="['list', 'th-large']"></basic-filter>
    
    <table class="table table-bordered table-responsive" v-if="auth.accounts.length > 0">
      <thead class="bg-primary">
        <tr>
          <td>Username</td>
          <td>Email</td>
          <td>Type</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in auth.accounts" :key="index">
            <td>
                <label class="action-link text-primary" @click="viewProd(item)">
                {{item.username}}
                </label>
                <label class="action-link text-primary" v-if="item.account_type === 'RIDER'">
                {{item.username}}
                </label>
            </td>
            <td>{{item.email}}</td>
            <td>{{item.account_type}}</td>
            <td :class="item.login_status === 'ONLINE' ? 'greenClass' : 'redClass'">{{item.login_status}}</td>
        </tr>
      </tbody>
    </table>

    <viewProducts 
      ref="viewProducts" 
      :id="merchantId">
    </viewProducts>

    <Pager
    :pages="numPages"
    :active="activePage"
    :limit="limit"
    v-if="auth.accounts.length > 0"
    />

    <empty v-if="auth.accounts.length === 0" :title="'No accounts available!'" :action="'Keep growing.'"></empty>
  </div>
</template>
<style lang="scss" scoped>
.greenClass{
  color: green;
}
.redClass{
  color: red;
}
@import "~assets/style/colors.scss";
.bg-primary{
  background: $primary !important;
  color: $white !important;
}
.ledger-summary-container{
  width: 100%;
  float: left;
  height: auto;
  margin-bottom: 100px;
  margin-top: 25px;
}
.ledger-summary-container-header{
  width: 100%;
  float: left;
  height: 70px;
  border: solid 1px #ddd;
}
.summary-container-item{
  width: 100%;
  float: left;
  border-radius: 5px;
  min-height: 50px;
  overflow-y: hidden;
  border: solid 1px #ddd;
  margin-top: 10px;
  padding-left: 10px;
}
.summary-container-item .header{
  width: 100%;
  float: left;
  height: 50px;
  line-height: 50px;
  color: #555;
}
.summary-container-item .body{
  width: 100%;
  float: left;
  min-height: 50px;
  overflow-y: hidden;
  padding-right: 10px;
}
td i {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.form-control-custom{
  height: 45px !important;
}
@media (max-width: 992px){
  .ledger-summary-container{
    width: 100%;
  }
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
import Pager from 'src/components/increment/generic/pager/Pager.vue'
export default{
  mounted(){
    if(this.user.type !== 'ADMIN'){
      ROUTER.push('/marketplace')
    }
    this.retrieve({created_at: 'desc'}, {column: 'created_at', value: ''})
  },
  data(){
    return {
      user: AUTH.user,
      data: null,
      auth: AUTH,
      selecteditem: null,
      errorMessage: null,
      config: CONFIG,
      category: [{
        title: 'Sort by',
        sorting: [{
          title: 'Username ascending',
          payload: 'username',
          payload_value: 'asc'
        }, {
          title: 'Username descending',
          payload: 'username',
          payload_value: 'desc'
        }, {
          title: 'Email ascending',
          payload: 'email',
          payload_value: 'asc'
        }, {
          title: 'Email descending',
          payload: 'email',
          payload_value: 'desc'
        }, {
          title: 'Type ascending',
          payload: 'account_type',
          payload_value: 'asc'
        }, {
          title: 'Type descending',
          payload: 'account_type',
          payload_value: 'desc'
        }, {
          title: 'Status ascending',
          payload: 'status',
          payload_value: 'asc'
        }, {
          title: 'Status descending',
          payload: 'status',
          payload_value: 'desc'
        }]
      }],
      filter: null,
      sort: null,
      limit: 5,
      activePage: 1,
      numPages: null,
      merchantId: null
    }
  },
  components: {
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'basic-filter': require('components/increment/generic/filter/Basic.vue'),
    'management-options': require('modules/admin/Menu.vue'),
    'viewProducts': require('src/modules/admin/Products.vue'),
    Pager
  },
  methods: {
    retrieve(sort, filter){
      if(sort !== null){
        this.sort = sort
      }
      if(filter !== null){
        this.filter = filter
      }
      if(sort === null && this.sort !== null){
        sort = this.sort
      }
      if(filter === null && this.filter !== null){
        filter = this.filter
      }
      let parameter = {
        condition: [{
          value: 'MERCHANT',
          column: 'account_type',
          clause: '='
        }, {
          value: 'RIDER',
          column: 'account_type',
          clause: 'or'
        }],
        sort: sort,
        limit: this.limit,
        offset: (this.activePage > 0) ? ((this.activePage - 1) * this.limit) : this.activePage
      }
      this.APIRequest('accounts/retrieve_accounts', parameter).then(response => {
        $('#loading').css({display: 'none'})
        if(response.data.length > 0){
          AUTH.accounts = response.data
          this.numPages = parseInt(response.size / this.limit) + (response.size % this.limit ? 1 : 0)
        }else{
          AUTH.accounts = []
          this.numPages = null
        }
      })
    },
    viewProd(item) {
      this.merchantId = item.id
      this.$refs.viewProducts.showModal(item.id)
    }
  }
}
</script>
