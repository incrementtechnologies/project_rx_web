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
                <li><strong>FORGOT PASSWORD AND RESET PASSWORD</strong></li>
                <ul class="second-ul">
                  <li>If you forgot your password, you can reset your password by clicking Forgot your password? a button located below the Login button on the Login page. For forgotten passwords, RUNWAY EXPRESS requires your active email address only.</li>
                  <li>
                    By clicking the Request Change button, you will be informed that a recovery email will be sent to your inputted email address. Please check your email for the reset password link sent by RUNWAY EXPRESS, the link is sent to your Spam box.
                  </li>
                  <li>
                    As you see the link sent by the RUNWAY EXPRESS, click the Reset button in your email and set your preferred password, after setting your password, click the Continue button and you will be redirected to your dashboard.
                  </li>
                </ul>
                <li><strong>BROADCAST DELIVERY</strong></li>
                <ul class="second-ul">
                  <li>
                    To know that there is a broadcast delivery, the merchant will broadcast a pending order. There will be a notification that will display on the center of your mobile phone saying “A new delivery is available!”.
                  </li>
                  <li>
                    By clicking the View button located beside the “cancel” button, you will see the new delivery information, that includes the following:
                    <ul>
                      <li>Order Number</li>
                      <li>Receiver</li>
                      <li>Merchant’s name</li>
                      <li>Distance from the merchant’s location by kilometer</li>
                      <li>Type of payment</li>
                    </ul>
                  </li>
                  <li>
                    By clicking the Accept button located under the new delivery information, the new delivery is added to your deliveries and it is marked as pending.
                  </li>
                  <li>
                    By clicking the Decline Button located under the new accept button, it will go back to the My Deliveries page. This means that you decline the new delivery.
                  </li>
                </ul>
                <li>If you have a low battery (50% above of battery percentage) you cannot accept the new delivery.</li>
                <li><strong>DELIVERIES</strong></li>
                <ul class="second-ul">
                  <li>The Deliveries page contains the list of pending and completed deliveries. If you are a newly registered rider, your deliveries page is empty and displays the “No activity at the moment”.</li>
                  <li>By clicking the pending deliveries, the map and the message button will be displayed and it shows the exact location of the customer who is about to deliver. Below the map, you can see the name of the customer to deliver and the kilometer. Once you clicked it, you will see the delivery information that includes the following:
                    <ul>
                      <li>Location of the Merchant</li>
                      <li>Location of the customer</li>
                      <li>Order Number</li>
                      <li>Subtotal</li>
                      <li>Delivery Fee</li>
                      <li>Total</li>
                    </ul>
                  </li>
                  <li>By clicking the Complete button located at the bottom of the pending delivery information, you will see a Confirmation Message asking you to continue the action or not. By clicking the OK button, your pending delivery means completed.</li>
                  <li>After the complete transaction, you can rate the merchant and the customer. By clicking the Rate.</li>
                </ul>
                <li><strong>WALLET</strong></li>
                <ul class="second-ul">
                  <li>
                    The Wallet page is designed for the display of your current balance. If you want to withdraw your balance, RUNWAY EXPRESS requires you a One Time Password to withdraw it. This is to prevent you from any takeover accounts and security of your transactions.
                  </li>
                </ul>
                <li><strong>MY DEPOSIT</strong></li>
                <ul class="second-ul">
                  <li>
                    In the Deposit Page , you will see the  list of your bank deposits. This contains the following:
                    <ul>
                      <li>Bank’s name where your money is deposited</li>
                      <li>Amount of money deposited</li>
                      <li>Transaction code</li>
                      <li>Card number</li>
                    </ul>
                  </li>
                  <li>
                    By clicking the Add Icon located at the lower right corner, you can add another deposit for your account. In adding your deposit , Runway Express requires you the following:
                    <ul>
                      <li>Type of currency</li>
                      <li>Amount of money</li>
                      <li>Payment center</li>
                      <li>Deposit receipt</li>
                      <li>You can add notes when you want to deposit your money.</li>
                    </ul>
                  </li>
                  <li>
                    By clicking the Select Images button, select photos will display which enable you to upload and select images of your deposit receipt. The image you selected will be displayed on the deposit receipt section.
                  </li>
                  <li>
                    You can also select deliveries you have completed which shows your done deliveries and commision. By clicking the add button, it will show a confirmation about the selection of your delivery. Click the yes button to confirm your selected delivery.
                  </li>
                  <li>
                    By clicking the Submit button, your new deposit will be successfully added to My Deposits.
                  </li>
                </ul>
                <li><strong>SETTINGS</strong></li>
                <ul class="second-ul">
                  <li>
                    By clicking the Settings tab, you can choose the color theme and the type of language you want for your application.
                  </li>
                </ul>
                <li><strong>LOGOUT</strong></li>
                <ul class="second-ul">
                  <li>
                    If you wish to end your login session in Runway Express, Click the Logout button located below the Settings tab in your sidebar.
                  </li>
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
.third-ul {
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
