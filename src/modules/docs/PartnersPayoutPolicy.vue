<template>
  <div
    class="modal fade"
    id="partnersPayoutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">PARTNERS PAYOUT POLICY</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="guide-holder">
            <ul class="first-ul">
              <li>
                <strong>PARTNERS PAYOUT POLICY</strong>
              </li>
              <li>
                <p>
                  Partners Pay-out Cycle Policy of {{common.COMPANY}} shall be applicable to all Partners Rider/Merchant.
                  The program will identify Partners Pay-out Cycle levels needed to be sufficiently
                  competitive in order to attract and retain highly qualified Partners.
                </p>
                <p>
                  {{common.COMPANY}} has an existing obligation to the riders/merchant partners pay-out cycle, by the
                  goodwill of both parties, desire to secure the partner pay-out cycle by entering into a
                  policy/agreement whereby the sum of pay-out cycle weekly shall be set into structured payment
                  policy.
                </p>
                <p>
                 The Merchant and Rider hereby agrees to pay any costs (if applicable) such as admin/transfer
                fees or other fee, in connection with the transfers made by runway wallet or other accounts or
                payment channels appointed by {{common.COMPANY}} , which are intended to make payments to
                Merchant’s personal account.
                </p>
              </li>
              <li>
                <p>
                  Therefore, for and in consideration of the foregoing premises, the parties here to agree as
                follows;
                </p>
              </li>
              <li>
                <strong>
                  1. Representation
                </strong>
              </li>
              <li>
                <p>
                 {{common.COMPANY}} hereby present Electronic Summary Pay-out to Riders/Merchant to secure the
                correct pay-out in the other way. Merchant Partner is to Oblige to send statement of account
                (SOA) to {{common.COMPANY}} for reference purpose and attachment.
                {{common.COMPANY}} accounting will review all pay-out requests to ensure compliance with company
                policy and that they fall within the provided guidelines.
                </p>
              </li>
              <li>
                <strong>
                  2. Timeline
                </strong>
              </li>
              <li>
                <p>
                 The parties hereby agree to the Timeline of payment pay-out cycle (PPC) as the declaration.
                  Runway Express shall confirm to the timeline set on pay-out cycle to the both parties before or
                  upon due amount indicated in payment pay-out cycle.
              <ul>
                <li>Pay-out are done weekly</li>
                <li>Cut-off every Friday</li>
                <li>Pay-out every Monday</li>
              </ul>  
                </p>
              </li>
             <li>
                <strong>
                  3. Pay-out Method
                </strong>
              </li>
              <li>
                <p>
                 {{common.COMPANY}} Payment Pay-out Cycle (PPC) it can be done to the following;
              <ul>
                <li>Cash</li>
                <li>Check</li>
                <li>Wallet account</li>
                <li>Payment channel</li>
              </ul>  
                </p>
              </li>
              <li>
                <strong>
                4. Process/Computation
                </strong>
              </li>
              <li>
                <ul>
                <li>Riders Partners Pay-out Cycle is computed base in delivery fee and others.</li>
                <li>Merchant Partners Pay-out Cycle is computed base in Order.</li>
              </ul> 
              </li>
              <li>
                <strong>5. Condition</strong>
              </li>
              <li>
                <p>
                In the occurrence that {{common.COMPANY}} fails to render payment pay-out cycle to merchant/rider,
                the full amount of the deficiency shall become due and demandable. Any further failure shall give
                rise to the right to the partner to demand for damages. {{common.COMPANY}} has the right to change,
                modify or approve exceptions to this policy at any time with or without notice.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#partnersPayoutModal"
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
