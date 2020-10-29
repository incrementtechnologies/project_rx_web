<template>
  <div
    class="modal fade"
    id="viewProductOnModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">View profile</h5>
          <button type="button" class="close" @click="hideModal()" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <br>
        <div class="profile-header-wrapper" v-if="data !== []" style="margin-right: 3%; margin-left: 3%;">
          <div class="bg-primary text-center">
            <br>
            <span class="image text-center mt-4" v-if="data.logo !== null">
                <img style="width: 150px; height:150px;" :src="config.BACKEND_URL + data.logo" alt="Avatar">
            </span>
            <span class="image text-center" v-else>
                <i class="fa fa-user-circle-o" ></i>
            </span>
            </div>
            <div class="bg-primary text-center" style="text-transform: capitalize">
            <p class="text-white">{{data.name}} <br> {{data.email}}
            </p>
            <p class="text-white"><i class="far fa-check-circle" color="primary"></i><i> {{data.status === 'NOT_VERIFIED' ? data.status : 'Verified'}}</i></p><br>
            </div>
        </div>
        <br>
        <div style="text-transform: capitalize">
          <h5 style="margin-left: 3%;">Business Information</h5>
          <hr>
        </div>
        <div class="row" style="margin-left: 3%">
          <div class="col-6">
            <p v-if="data.address !== null"><i class="fas fa-address-card"></i>  &nbsp;{{ data.address }}</p>
            <p v-else><i class="fas fa-address-card"></i>  &nbsp;No address given</p>
            <p v-if="data.prefix !== null"><i class="fas fa-user"></i>  &nbsp;{{ data.prefix }}</p>
            <p v-else><i class="fas fa-user"></i>  &nbsp;No PREFIX given</p>
            <p v-if="scheduleTypeSelected !== null"><i class="fas fa-calendar-alt"></i>  &nbsp;{{ scheduleTypeSelected }}</p>
            <p v-else><i class="fas fa-calendar-alt"></i>  &nbsp;No schedule type</p>
          </div>
          <div class="col-6">
            <p v-if="daysSelected !== null"><i class="fas fa-calendar-day"></i>  &nbsp;{{ daysSelected }}</p>
            <p v-else><i class="fas fa-calendar-day"></i>  &nbsp;No days given</p>
            <p v-if="startTime !== null && endTime !== null"><i class="fas fa-clock"></i>  &nbsp;{{ startTime }} - {{ endTime }}</p>
            <p v-else><i class="fas fa-clock"></i>  &nbsp;No start or end time given</p>
          </div>
        </div>
        <div style="text-transform: capitalize">
          <hr>
          <h5 style="margin-left: 3%;">Business Location</h5>
          <hr>
        </div>
        <div class="row" style="margin-left: 3%" v-if="locality !== []">
          <div class="col-md-12">
            <p><i class="fas fa-address-card"></i>  &nbsp;{{ ( locality.length !== 0 ? ((locality.route ? locality.route + ', ' : '') + ' ' + (locality.locality ? locality.locality + ', ' : '') + ' ' + (locality.region ? locality.region + ', ' : '') + (locality.country ? locality.country : '')) : 'No Location Given') }}</p>
          </div>
        </div>
        <div style="text-transform: capitalize">
          <hr>
          <h5 style="margin-left: 3%;">Billing Information</h5>
          <hr>
        </div>
        <div class="row" style="margin-left: 3%" v-if="bill !== []">
          <div class="col-6">
            <p v-if="bill.company !== null"><i class="fas fa-building"></i>  &nbsp;{{ bill.company }} </p>
            <p v-else><i class="fas fa-building"></i>  &nbsp;No company name given</p>
            <p v-if="bill.address !== null"><i class="fas fa-address-card"></i>  &nbsp;{{ bill.address }}</p>
            <p v-else><i class="fas fa-address-card"></i>  &nbsp;No address given</p>
            <p v-if="bill.city !== null"><i class="fas fa-city"></i>  &nbsp;{{ bill.city }}</p>
            <p v-else><i class="fas fa-city "></i>  &nbsp;No city given</p>
          </div>
          <div class="col-6">
            <p v-if="bill.state !== null"><i class="fas fa-city"></i>  &nbsp;{{ bill.state }}</p>
            <p v-else><i class="fas fa-city"></i>  &nbsp;No state given</p>
            <p v-if="bill.postal_code !== null"><i class="fas fa-mail-bulk"></i>  &nbsp;{{ bill.postal_code }}</p>
            <p v-else><i class="fas fa-mail-bulk"></i>  &nbsp;No postal code given</p>
            <p v-if="bill.country !== null"><i class="fas fa-flag"></i>  &nbsp;{{ bill.country }}</p>
            <p v-else><i class="fas fa-flag"></i>  &nbsp;No country given</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="hideModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.bg-primary {
  background: $primary !important;
}
img {
  border-radius: 50%;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
export default {
  data() {
    return {
      user: AUTH.user,
      config: CONFIG,
      common: COMMON,
      data: [],
      locality: [],
      bill: [],
      endTime: null,
      startTime: null,
      daysSelected: null,
      scheduleTypeSelected: null
    }
  },
  mounted() {
  },
  methods: {
    hideModal() {
      $('#viewProductOnModal').modal('hide')
    },
    showModal() {
      $('#viewProductOnModal').modal('show')
    },
    retrieve(item){
      let parameter = {
        condition: [{
          value: item.id,
          column: 'account_id',
          clause: '='
        }]
      }
      $('#loading').css({display: 'block'})
      this.APIRequest('merchants/retrieve', parameter).then(response => {
        console.log(response.data, 'dfghjkl')
        if(response.data.length > 0){
          this.data = response.data[0]
          this.createFlag = false
          if (response.data[0].schedule != null) {
            const schedule = JSON.parse(response.data[0].schedule)
            this.scheduleTypeSelected = schedule.type
            this.daysSelected = schedule.days.join()
            this.startTime = schedule.startTime
            this.endTime = schedule.endTime
          }
          let par = {
            condition: [{
              value: item.id,
              clause: '=',
              column: 'account_id'
            }]
          }
          this.APIRequest('locations/retrieve', par).then(response => {
            if(response.data.length > 0) {
              this.locality = response.data[0]
            } else {
              this.locality = []
            }
          })
          let parameter = {
            condition: [{
              value: item.id,
              column: 'account_id',
              clause: '='
            }]
          }
          this.APIRequest('billing_informations/retrieve', parameter).then(response => {
            $('#loading').css({display: 'none'})
            this.$parent.retrieve({created_at: 'desc'}, {column: 'created_at', value: ''})
            if(response.data.length > 0){
              this.bill = response.data[0]
              this.showModal()
            } else {
              this.bill = []
            }
          })
        }else{
          this.createFlag = true
          this.data = []
        }
      })
    }
  }
}
</script>
