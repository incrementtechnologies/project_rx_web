<template>
  <div class="container col-md-11 col-sm-12 mx-auto mt-4 row text-center">
    <div class="guide-holder">
      <ul class="first-ul">
        <li>
          <strong>ABOUT US</strong>
        </li>
        <li>Runway Express (Runway Express Mobile Application Corporation.) is a mobile subsidiary application that has ventured into the Philippine market opening its door in Davao City.</li>
        <li>
          <strong>"We Deliver Happiness!"</strong>
        </li>
      <div class="vision md-6 mt-4 border bg-light shadow-sm p-3 row m-0 rounded-lg">
        <label class="col m-0 p-0 font-weight-bold">VISION</label>
        <p>Preferred partner in all business aspects not only logistics and services but in terms of product development and innovations that will leverage quality performance.</p>
      </div>

      <div class="mission md-6 mt-4 border bg-light shadow-sm p-3 row m-0 rounded-lg mb-3">
        <label class="col m-0 p-0 font-weight-bold">MISSION</label>
        <p>Our Mission is to bring affordable delivery service to our consumers without compromising quality; building lasting relationship with its partner merchants and partner riders; and constant innovation with our services that will create value for our shareholders.</p>
      </div>
      <li><strong>PRODUCTS & SERVICES</strong></li>
        <ul class="second-ul">
          <li>Food and Beverage</li>
          <li>Errands</li>
          <li>Grocery Items</li>
          <li>Horti, Agri and Livestock</li>
          <li>Hardware Supplies</li>
          <li>Online Shops</li>
          <li>Pharmacy and Cosmetics</li>
        </ul>
        <li><strong>Increase Revenue</strong></li>
        <li>We will help you reach your full potential by offering a new channel to market and sell your products!</li>
        <li><strong>FAST and Timely Remittance</strong></li>
        <li>Weekly reconciliation and remittance using Merchant's preferred channels (Bank Transfer, Cheque, Paymaya, Gcash)</li>
        <li><strong>Quality Assured!</strong></li>
        <li>We will make sure that what riders get from merchants will arrive to consumers in perfect shape!</li>
        <li><strong>One Stop Shop</strong></li>
        <li>Will be serving from food delivery to groceries to catering to Online shops! </li>
        <li><strong>ZERO cost Marketing!</strong></li>
        <li><strong>Partnerships</strong></li>
        <li>
          We will be partnering with different influencers to promote the app and our partner merchants. We will also be partnering with companies to better build relationships and gain customers. 
        </li>
        <li><strong>Promotions</strong></li>
        <li>
          We will be having promos and discounts online and offline! There will also be fun and exciting games coming to our online channel!
        </li>
        <li><strong>Posters</strong></li>
        <li>We will have visibility through different channels, online and offline. </li>
        <li><strong>People</strong></li>
        <li>We have a Team that is designated to help our partners grow their business!</li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.guide-holder {
  margin-top: 22px;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}
.slogan {
  font-size: 200%;
}
.vision {
  color: grey;
}
.mission {
  color: grey;
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
