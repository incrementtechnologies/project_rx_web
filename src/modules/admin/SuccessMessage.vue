<template>
  <div class="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-primary" id="exampleModalLabel">Confirmation</h5>
          <button type="button" class="close" @click="hideModal()" aria-label="Close">
            <span aria-hidden="true" class="text-primary">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <span v-if="successMessage" class="text-primary text-center incre-row">
                <i class="fa fa-check" style="font-size: 75px; color: #FF5B04;"></i>
                <label class="incre-row" style="color: #FF5B04;;">Successfully Validated</label>
            </span>
            <span v-else class="text-primary text-center incre-row">
                <i class="fa fa-times" style="font-size: 75px; color: #FF5B04;"></i>
                <label class="incre-row" style="color: #FF5B04;;">Invalid Validation</label>
            </span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="onConfirm()">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.text-primary{
  color: $primary !important;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
    return {
      user: AUTH.user,
      auth: AUTH,
      config: CONFIG,
      successMessage: null
    }
  },
  methods: {
    showModal(param){
      this.successMessage = param
      $('#success').modal('show')
    },
    hideModal(){
      $('#success').modal('hide')
    },
    onConfirm(){
      this.hideModal()
    }
  }
}
</script>
