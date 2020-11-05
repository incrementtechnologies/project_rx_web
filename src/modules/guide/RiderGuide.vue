<template>
  <div
    class="modal fade"
    id="guideRiderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">{{common.APP_NAME}} RIDER GUIDE</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="guide-holder">
            <ul class="first-ul">
                <li><strong>{{common.APP_NAME}} RIDER APP</strong></li>
                <li>A mobile application that can help riders to manage the deliveries from merchants to customers.</li>
                <li><strong>REGISTRATION</strong></li>
                <ul class="second-ul">
                <li>
                Before registering as a rider, you should install the Runway Express Rider mobile application in the Play Store. Click the Register now button located below the “Don’t have an account?” label on the Login page. For registration, RUNWAY EXPRESS requires only the following:
                    <ul>
                        <li>Username</li>
                        <li>E-mail address</li>
                        <li>Password</li>
                    </ul>
                </li>
                <li>
                    By clicking the Register button below the confirm password  field, it will create an account then automatically login and redirect to your dashboard.
                </li>
                </ul>
                <li>
                    Since this is rider registration, the registration takes place using the default account type(USER). Rider registration requires through verification by the management in order to change your account type into RIDER.
                </li>
                <li><strong>LOGIN</strong></li>
                <ul class="second-ul">
                <li>
                    To login as a RIDER, click  the Login Now button located below the “Have an account already” label on the registration page (if you happen to be on the registration page). For login, RUNWAY EXPRESS requires only the following:
                    <ul>
                        <li>Username</li>
                        <li>Password</li>
                    </ul>
                </li>
                <li>By clicking the Login button, it will redirect you to your dashboard which is the Deliveries page.</li>
                </ul>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#guideRiderModal"
          >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.bg-primary {
  background-color: $primary !important;
}
.guide-holder {
  margin-top: 22px;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}
.first-ul {
  padding: 0px;
  list-style: none;
}
ul li {
  text-align: justify;
  font-size: 15px;
  color: grey;
  padding-top: 10px;
}
.second-ul {
  padding-left: 10px;
  list-style: inside;
}
</style>
<script>
import ROUTER from 'src/router'
import Vue from 'vue'
import AUTH from 'src/services/auth'
import COMMON from 'src/common.js'
export default {
  data() {
    return {
      user: AUTH.user,
      common: COMMON
    }
  },
  props: {},
  methods: {}
}
</script>
