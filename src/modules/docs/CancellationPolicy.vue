<template>
  <div
    class="modal fade"
    id="cancellationModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">CANCELLATION POLICY</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="guide-holder">
            <ul class="first-ul">
              <li>
                <strong>CANCELLATION POLICY</strong>
              </li>
              <li>As a general rule you shall not be entitled to cancel your order once you have received confirmation of the same. Cancellation of order can be done Cash on Delivery. For online payment cancellation of order is not allowed.</li>
              <li>Runway Express and Merchant Partner has the right to cancel order in such case  full refund will be done from the website support@runwayexpress.com In the unlikely event of an unavailable item in your order, we will contact you thru the phone number / email provided, in such event you will be entitled to cancel the entire order and shall be refunded in accordance with our refund policy.</li>
              <li>We reserve the right to cancel your order in the following circumstance:
                <ul class="second-ul">
                  <li>
                    in the event of the designated address outside in the delivery zone offered by us
                  </li>
                  <li>
                    failure to contact you by phone or email at the time of confirming the order booking
                  </li>
                  <li>
                    failure to deliver your order due to lack of information, direction from you at the time of delivery; or
                  </li>
                  <li>
                    unavailability of all the items ordered by you at the time of booking the order; or
                  </li>
                  <li>
                    failure due to reasons beyond our control or attributable to the Vendor.
                  </li>
                </ul>
              </li>
              <li>You must notify Runway express 10 minutes after placing the order if you decide to cancel your order by phone or email.</li>
              <li>If the cancellation was made in time and once the merchant has accepted your cancellation, we will refund the amount, which includes the initial delivery charge. (if applicable) </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#cancellationModal"
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
