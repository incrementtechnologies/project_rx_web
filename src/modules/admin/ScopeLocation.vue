<template>
  <div class="ledger-summary-container">
    
    <management-options />
    <div class="form-group">
      <button class="btn btn-primary pull-right mb-1" @click="showModal('create', null)">Add</button>
    </div>

    <table class="table table-bordered table-responsive" v-if="data !== null">
      <thead>
        <tr>
          <td>Code</td>
          <td>Location</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>
            {{item.code}}
          </td>
          <td>
            {{
              item.route + ', ' + item.city + ', ' + item.region + ', ' + item.country
            }}
          </td>
          <td>
            <button class="btn btn-primary" @click="showModal('update', item)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger" @click="setOnRemoveItem(item)">
              <i class="fas fa-trash"></i>
            </button>
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

      <Confirmation
      :title="'Removal Confirmation'"
      :message="'Are you sure you want to continue this action?'"
      ref="confirmation"
      @onConfirm="removeItem"/>

    <empty v-if="data === null" :title="'No accounts available!'" :action="'Keep growing.'"></empty>
    <increment-modal :property="modalProperty"></increment-modal>
  </div>
</template>
<style lang="scss" scoped> 
@import "~assets/style/colors.scss";
.fas{
  padding-right: 0px !important;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
import Pager from 'src/components/increment/generic/pager/Pager.vue'
import Confirmation from 'src/components/increment/generic/modal/Confirmation.vue'
import propertyModal from './ScopeLocation.js'
export default{
  mounted(){
    if(this.user.type !== 'ADMIN' && this.user.type !== 'BUSINESS_ADMIN'){
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
      modalProperty: propertyModal
    }
  },
  components: {
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'basic-filter': require('components/increment/generic/filter/Basic.vue'),
    'management-options': require('modules/admin/Menu.vue'),
    'increment-modal': require('components/increment/generic/modal/Modal.vue'),
    Pager,
    Confirmation
  },
  methods: {
    deleteLocation(item){
      let parameter = {
        id: item.id
      }
      this.APIRequest('location_scopes/delete', parameter).then(response => {
        $('#loading').css({display: 'none'})
        this.data.splice(this.data.indexOf(item), 1)
      })
    },
    showModal(action, item = null){
      if(action === 'create') {
        this.modalProperty = {...propertyModal}
        let inputs = this.modalProperty.inputs
        inputs.map(input => {
          input.value = null
        })
        let params = this.modalProperty.params
      }
      if(item !== null) {
        let modalData = {...this.modalProperty}
        let parameter = {
          title: 'Update Location',
          route: 'location_scopes/update',
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
          if(input.variable === 'code') {
            input.value = item.code
          }
          if(input.variable === 'route') {
            input.value = item.route
          }
          if(input.variable === 'city'){
            input.value = item.city
          }
          if(input.variable === 'region'){
            input.value = item.region
          }
          if(input.variable === 'country'){
            input.value = item.country
          }
          this.modalProperty = {...modalData}
        })
      }
      $('#scopeLocatioModal').modal('show')
    },
    setOnRemoveItem(item){
      this.$refs.confirmation.show(item.id)
    },
    retrieve(){
      let parameter = {
        sort: {
          created_at: 'desc'
        },
        limit: this.limit,
        offset: (this.activePage > 0) ? ((this.activePage - 1) * this.limit) : this.activePage
      }
      this.APIRequest('location_scopes/retrieve', parameter).then(response => {
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
    removeItem(event){
      let parameter = {
        id: event.id
      }
      this.APIRequest('location_scopes/delete', parameter).then(response => {
        $('#loading').css({display: 'none'})
        this.retrieve()
      })
    }
  }
}
</script>
