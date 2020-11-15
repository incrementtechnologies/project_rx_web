<template>
  <div class="settings-container">
    <management-options />
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <label>
          <b>Payment Centers</b>
          <button class="btn btn-primary pull-right" @click="showModal('create', 'payment_centers', 'Payment Center')"><i class="fa fa-plus"></i></button>
        </label>
        <table v-if="paymentCenters !== null && paymentCenters.length > 0">
          <tr v-for="(item, index) in paymentCenters">
            <td style="width: 100%;">
              {{item.payload_value}}
              <button class="btn btn-primary pull-right" @click="showModal('create', 'payment_centers', 'Payment Center')"><i class="fa fa-edit"></i></button>
              <button class="btn btn-primary pull-right" @click="showModal('create', 'payment_centers', 'Payment Center')"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <label>
          <b>Transfer payloads</b>
          <button class="btn btn-primary pull-right" @click="showModal('create', 'transfer_payloads', 'Transfer Payload')"><i class="fa fa-plus"></i></button>
        </label>
        <div v-if="transferPayloads !== null && transferPayloads.length > 0">
          <label v-for="(item, index) in transferPayloads" class="payload-item">
              {{item.payload_value}}
              <i class="fa fa-edit pull-right text-success"  @click="showModal('update', 'transfer_payloads', 'Payment Center', item)"></i>
              <i class="fa fa-trash pull-right text-danger"  @click="removeItemAlert(item, 'transfer_payloads')"></i>
          </label>
        </div>
      </div>

      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <label>
          <b>Product Categories</b>
          <button class="btn btn-primary pull-right" @click="showModal('create', 'product_categories', 'Product Category')"><i class="fa fa-plus"></i></button>
        </label>
        <div v-if="productCategories !== null && productCategories.length > 0">
          <label v-for="(item, index) in productCategories" class="payload-item">
              {{item.payload_value}}
              <i class="fa fa-edit pull-right text-success"  @click="showModal('update', 'product_categories', 'Payment Center', item)"></i>
              <i class="fa fa-trash pull-right text-danger"  @click="removeItemAlert(item, 'product_categories')"></i>
          </label>
        </div>
      </div>


    </div>

    <increment-modal :property="modalProperty"></increment-modal>
    <Confirmation
      :title="'Removal Confirmation'"
      :message="'Are you sure you want to continue this action?'"
      ref="confirmation"
      @onConfirm="removeItem"/>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.greenClass{
  color: $success;
}
.redClass{
  color: $danger;
}
.bg-primary{
  background: $primary !important;
  color: $white !important;
}
.settings-container{
  width: 100%;
  float: left;
  height: auto;
  margin-bottom: 100px;
  margin-top: 25px;
}

.fa{
  padding-right: 0px !important;
}
label{
  width: 100%;
}

.payload-item{
  line-height: 50px;
  border-radius: 5px;
  border: solid 1px #ccc;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.payload-item i{
  margin-right: 10px;
  margin-top: 15px;
}

.form-control-custom{
  height: 45px !important;
}
@media (max-width: 992px){
  .settings-container{
    width: 100%;
  }
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
import payloadModal from './Payloads.js'
import Confirmation from 'src/components/increment/generic/modal/Confirmation.vue'
export default{
  mounted(){
    if(this.user.type !== 'ADMIN' && this.user.type !== 'BUSINESS_ADMIN'){
      ROUTER.push('/marketplace')
    }
    this.retrieve('payment_centers')
    this.retrieve('transfer_payloads')
    this.retrieve('product_categories')
  },
  data(){
    return {
      user: AUTH.user,
      data: null,
      auth: AUTH,
      productCategories: null,
      paymentCenters: null,
      transferPayloads: null,
      modalProperty: payloadModal,
      payload: null
    }
  },
  components: {
    'management-options': require('modules/admin/Menu.vue'),
    'increment-modal': require('components/increment/generic/modal/Modal.vue'),
    Confirmation
  },
  methods: {
    removeItemAlert(item, category){
      this.payload = category
      this.$refs.confirmation.show(item.id)
    },
    removeItem(event){
      let parameter = {
        id: event.id
      }
      this.APIRequest('payloads/delete', parameter).then(response => {
        this.retrieve()
      })
    },
    showModal(action, category, categoryLabel, item = null){
      this.payload = category
      if(action === 'create') {
        this.modalProperty = {
          ...payloadModal,
          title: 'ADD ' + categoryLabel.toUpperCase()
        }
        let inputs = this.modalProperty.inputs
        inputs.map(input => {
          if(input.id === 'payload'){
            input.value = category
          }else if(input.id === 'payload_value'){
            input.value = null
          }
        })
        let params = this.modalProperty.params
        params.map(param => {
          if(param.variable === 'account_id'){
            param.value = this.user.userID
          }
        })

      }
      if(item !== null) {
        let modalData = {...this.modalProperty}
        let parameter = {
          title: 'Update',
          route: 'payloads/update',
          button: {
            left: 'Cancel',
            right: 'Update'
          },
          params: [{
            variable: 'id',
            value: item.id
          }]
        }
        modalData = {...modalData, ...parameter}
        modalData.inputs.map(input => {
          if(input.variable === 'payload_value'){
            input.value = item.payload_value
          }
          if(input.variable === 'payload'){
            input.value = item.payload
          }
          this.modalProperty = {...modalData}
        })
      }
      $('#payloadModal').modal('show')
    },
    retrieve(payload = null){
      let parameter = {
        condition: [{
          clause: '=',
          column: 'payload',
          value: this.payload !== null ? this.payload : payload
        }],
        sort: {
          payload_value: 'asc'
        }
      }
      if(this.payload !== null){
        payload = this.payload
      }
      this.APIRequest('payloads/retrieve', parameter).then(response => {
        switch(payload){
          case 'product_categories':
            this.productCategories = response.data
            break
          case 'payment_centers':
            this.paymentCenters = response.data
            break
          case 'transfer_payloads':
            this.transferPayloads = response.data
            break
        }
      })
    }
  }
}
</script>
