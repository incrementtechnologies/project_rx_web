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
        <div v-for="(item, index) in data" :key="index" class="card">
          <div class="card-header row m-0 align-items-center px-0">
            <div class="col-md-12 col-sm-12 p-0 text-gray">
              {{item.created_at_human}}
            </div>
            <div class="w-50 font-weight-bold p-0">{{item.description ? item.description : ''}}</div>
            <div class="w-50 text-right font-weight-bold" :class="item.amount > 0 ? 'text-success' : 'text-danger'">
              {{item.amount > 0 ? '+ ' : '- '}}{{item.amount > 0 ? currency.displayWithCurrency(item.amount, item.currency) : currency.displayWithCurrency(item.amount * -1, item.currency)}}
            </div>
          </div>
        </div>
        <div v-if="data !== null" class="text-center option-holder">
          <button class="btn btn-primary rounded" @click="retrieveHistory(limitHistory + 5)" v-if="!showButton">Show more</button>
          <button class="btn btn-primary rounded" @click="retrieveHistory(5)" v-if="showButton">Show less</button>
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

.card {
  border: none;
  border-bottom: 1px solid #ccc !important;
  width: 100%;
  float: left;
}

.option-holder{
  width: 100%;
  float: left;
  margin-top: 25px;
}

@media (max-width: 992px) {
  .col-6{
    max-width: 100%;
    flex: 0 0 100%;
  }
  .ledger-holder{
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
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
      withdraw: null,
      offsetHistory: 0,
      limitHistory: 5,
      showButton: false,
      show: false,
      dataLength: 0
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
    this.retrieveHistory()
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
    },
    retrieveHistory(limit) {
      let parameter = {
        account_id: this.user.userID,
        account_code: this.user.code,
        offset: this.offsetHistory * limit,
        limit: limit
      }
      $('#loading').css({display: 'block'})
      this.APIRequest('ledger/history', parameter).then(response => {
        $('#loading').css({display: 'none'})
        if(response.data.length > 0) {
          let array = null
          if(this.data){
            array = response.data
          }else{
            array = response.data
          }
          this.data = array
          if(response.size > 5){
            if(this.dataLength === response.data.length){
              this.showButton = true
            }else {
              this.limit = limit
              this.showButton = false
              this.dataLength = response.data.length
            }
          }else {
            this.show = true
          }
        } else {
          if(this.offsetHistory === 0){
            this.data = null
          }
        }
      })
    }
  }
}
</script>
