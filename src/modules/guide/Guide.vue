<template>
  <div class="modal fade" id="guideMerchantModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white" id="exampleModalLabel">{{common.APP_NAME}} User Guide</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="guide-holder">
              <ul class="first-ul">
                <li><strong>MERCHANT GUIDE</strong></li>
                <li>
                  As a merchant, {{common.COMPANY}} allows you to manage your products and orders from your customers.
                </li>
                <li><strong>REGISTRATION</strong></li>
                <ul class="second-ul">
                  <li>To register as a merchant you can visit <a href="www.runwayexpress.co.uk">www.runwayexpress.co.uk</a> and on the landing page click Register located at the top-right menu. For registration, {{common.COMPANY}} requires only the following:
                    <ul>
                      <li>Username</li>
                      <li>E-mail address</li>
                      <li>Password</li>
                    </ul>
                  </li>
                  <li>
                    By clicking the Signup button, it will create an account then automatically login and redirect to your dashboard.
                  </li>
                  <li>
                    Since this is merchant registration, the registration takes place using the default account type(USER). Merchant registration requires thorough verification by the management, {{common.COMPANY}} will carefully check your business details and you will undergo training for business to maintain the quality operation and health partnership.
                  </li>
                </ul>
                <li><strong>LOGIN</strong></li>
                <ul class="second-ul">
                  <li>
                    To log in as a merchant, visit <a href="www.runwayexpress.co.uk">www.runwayexpress.co.uk</a>, and on the landing page click Login located at the top-right menu. For login, {{common.COMPANY}} requires only the following:
                      <ul>
                        <li>Username</li>
                        <li>Password</li>
                      </ul>
                  </li>
                  <li>
                    By clicking the Login button, it will redirect you to your dashboard.
                  </li>
                </ul>
                <li><strong>FORGOT PASSWORD AND RESET PASSWORD</strong></li>
                <ul class="second-ul">
                  <li>
                    If you forgot your password, you can reset your password by clicking Forgot your password? a button located below the Login button on the Login page. For forgotten passwords, {{common.COMPANY}} requires your active email address only.
                  </li>
                  <li>
                    By clicking the Send Request button, you will be informed that a recovery email will be sent to your inputted email address. Please check your email for the reset password link sent by {{common.COMPANY}}, the link is sent to your Spam box.
                  </li>
                  <li>
                    As you see the link sent by the {{common.COMPANY}}, click the Reset Password link in your email and set your preferred password, after setting your password, click the Continue button and you will be redirected to your dashboard.
                  </li>
                </ul>
                <li><strong>DASBOARD</strong></li>
                <ul class="second-ul">
                  <li>
                    To see your summary of your sales, your current E-wallet balance together with your recent transactions and withdrawal requests, go to the left menu then click Dashboard.
                  </li>
                </ul>
                <ul class="second-ul">
                  <li>
                    If you want to download the website, go to the left menu then click Marketplace. {{common.COMPANY}} provided you two options for downloading it and these are the following:
                      <ul>
                        <li>
                          Google Play Store
                        </li>
                        <li>
                          App Store
                        </li>
                      </ul>
                  </li>
                </ul>
                <li><strong>STORE ICON</strong></li>
                <ul class="second-ul">
                  <li>To see the current status of your business, go to the top-right menu then click the Store icon. Upon clicking the icon, you will see four categories and they are called Merchant Controls, that includes the following:
                    <ul>
                      <li>Inventory</li>
                      <li>Wallet</li>
                      <li>Ledger</li>
                      <li>Summary Of Orders</li>
                    </ul>
                    Each of the categories redirects you to another page as you click one of them.
                      <ul>
                      <li><strong>INVENTORY</strong></li>
                      <li>The inventory page is for the list of products that you have in your business. On this page, you can update the information on your products. If you want to see your products in alphabetical order, you can click the Title Ascending or Title Descending button. Also, you can search for your products through the Search bar located beside the mentioned buttons.</li>
                      <li>
                        If you want to update the information of your product, you can click the Edit icon located on the left side of your products’ inventory table. For updating your products, {{common.COMPANY}} allows you to update  the following:
                        <ul>
                          <li>Product’s image</li>
                          <li>Product’s name</li>
                          <li>Product’s description</li>
                          <li>Product’s tags</li>
                          <li>Product’s SKU(Stock Keeping Unit) - this helps your customers to identify a specific product easily.</li>
                          <li>Product’s categories(Foods, Status, Preparation time)</li>
                          <li>Product’s quantity</li>
                          <li>Product’s variation(size and color)</li>
                          <li>Product’s price</li>
                          <li>Product’s additional comments</li>
                          <li>Product’s exclusive location</li>
                        </ul>
                      </li>
                      <li>
                        By clicking the Update button, {{common.COMPANY}} will save the changes, besides, if you want to see the changes you made before updating it, you can click the Preview button. 
                      </li>
                      <li>
                        By clicking the New Product button located at the upper right corner of your inventory table, you can add new products you wish to be on the list of your product inventory. For adding new products, {{common.COMPANY}} requires only the following:
                        <ul>
                          <li>Name of your product</li>
                          <li>Description of your product</li>
                        </ul>
                      </li>
                      <li>
                        By clicking the Submit button, your new product will be added to your product inventory list, otherwise, your product will not be added if you click the Cancel button.
                      </li>
                    </ul>
                    <ul>
                      <li><strong>WALLET</strong></li>
                      <li>The Wallet page is designed for the display of your current balance. If you want to withdraw your balance, {{common.COMPANY}} requires you a One Time Password to withdraw it. This is to prevent you from any takeover accounts and security of your transactions.</li>
                    </ul>
                    <ul>
                      <li><strong>LEDGER</strong></li>
                      <li>The Ledger page contains your financial statements, which include your payment history such as your transactions.</li>
                    </ul>
                    <ul>
                      <li><strong>SUMMARY OF ORDERS</strong></li>
                      <li>The Summary Of Orders page is designed for the overall order information that includes the delivery status of each product in a tabular format. If you want to search some order products through date use the Search bar located at the upper list of orders.</li>
                      <li>By clicking the Setting button located at the left side of the table, you will see the categories, that includes the following:
                        <ul>
                          <li>Message from your riders</li>
                          <li>Showing off the product</li>
                          <li>Printing the product receipt</li>
                          <li>Tracking the location of the specific order</li>
                          <li>Rating of the customer</li>
                        </ul>
                      </li>
                      <li>Aside from the Summary of Orders, the Summary of Inventory is placed under the Export button located beside the search bar.By clicking the Summary Of Inventory, a form containing your product information is displayed. Besides, {{common.COMPANY}} allows you to download the form either in PDF or CSV located at the lower-left corner of the form.</li>
                    </ul>
                  </li>
                </ul>
                <li><strong>MERCHANT ICON</strong></li>
                <ul class="second-ul">
                  <li>To see your profile, go to the right menu then click your Avatar Icon. Upon clicking the icon you will see the two categories:
                    <ul>
                      <li>Personal</li>
                      <li>Documents</li>
                    </ul>
                    The Personal Category is composed of your Profile and Invite of Friends, while the Document Category is composed of Privacy Policy and Terms and Conditions.
                  </li>
                </ul>
                <li><strong>MY PROFILE</strong></li>
                <ul class="second-ul">
                  <li>
                    By clicking the My Profile(first category of Personal under Merchant Icon), you will see your Settings containing the following:
                    <ul>
                      <li>Business Information</li>
                      <li>Notifications</li>
                      <li>Business Locations</li>
                      <li>Account</li>
                      <li>Billing Information</li>
                      <li>Settings</li>
                    </ul>
                  </li>
                  <li>By clicking the Business Information, {{common.COMPANY}} requires you only the following:
                    <ul>
                      <li>Business Name</li>
                      <li>Business Email address</li>
                      <li>Prefix</li>
                      <li>Website</li>
                      <li>Business Schedule</li>
                    </ul>
                  </li>
                  <li>By clicking the Update button, {{common.COMPANY}} will save your business Information.</li>
                  <li>By clicking the Notification, {{common.COMPANY}} gives you options if you want to get notified. To get notified, you can choose of the three options:
                    <ul>
                      <li>Sends an email every time there’s login with an account.</li>
                      <li>Enable OTP every time there's a login with an account.</li>
                      <li>Receive new PIN from email every time there's a login with an account.</li>
                    </ul>
                    You just need to turn on the Toggle Switch if you want to enable some of the options. The switch is located beside each option.
                  </li>
                  <li>By clicking the Business Location, you will see the location of your business. However, {{common.COMPANY}} allows you to view, edit, and delete the address of your location by clicking the  View, Edit, and Delete button located beside your address.</li>
                  <li>Besides, if your business’ location is not yet added, you can add your location by clicking the Add Location button. By clicking the button, RUNWAY EXPRESS requires only the following:
                    <ul>
                      <li>Branch name</li>
                      <li>Branch name</li>
                    </ul>
                    Adding address,  you can use the Custom Location button located below the Branch name input field and Use the Pin Location button if you have found your business location on the map.
                  </li>
                  <li>By clicking the Submit button, {{common.COMPANY}} will save your branch name and its location. Otherwise, it will not be saved if you click the Cancel button.</li>
                  <li>By clicking the Account, {{common.COMPANY}} shows you the following:
                    <ul>
                      <li>Username</li>
                      <li>Email address</li>
                      <li>Password</li>
                    </ul>
                  </li>
                  <li>You can change your email address and password and by clicking the Update button, {{common.COMPANY}} will save changes to your account.</li>
                  <li>By clicking the Billing Information, {{common.COMPANY}} shows you the following:
                    <ul>
                      <li>Company’s name(optional)</li>
                      <li>Company’s Address</li>
                      <li>City</li>
                      <li>Country</li>
                      <li>Postal code</li>
                      <li>State</li>
                    </ul>
                  </li>
                  <li>You can change each of them and by clicking the Update button, RUNWAY EXPRESS will save changes to your Billing Information.</li>
                  <li>By clicking the Settings, you can enable switching for Broadcasting. This means that you can automatically send orders to your riders once this is accepted.</li>
                </ul>
                <li><strong>INVITE FRIENDS</strong></li>
                <ul class="second-ul">
                  <li>By clicking the Invite Friends (second category of PERSONAL category in Merchant Icon), {{common.COMPANY}} shows you the following:
                    <ul>
                      <li>The list of emails to which you have sent your invites.</li>
                      <li>The email address you want to invite.</li>
                    </ul>
                  </li>
                  <li>After filling in the email address, click the Send Invitation button. Once done clicking, the email address will be displayed and you will be notified if it has been accepted or not.</li>
                </ul>
                 <li>For the Documents part, you will see the Privacy Policy and the Terms and Conditions of the website. They are located at the top right of the window.</li>
                  <li>Lastly, if you wish to end your login session, click the Logout button, the button is located at the top right window.</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#guideMerchantModal">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.bg-primary{
  background-color: $primary !important;
}
.guide-holder{
  margin-top:22px;
  width:96%;
  float: left;
  margin-left:2%;
  margin-right:2%;
}
.jumbotron{
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  background: #fff;
}
.alert{
  text-align: justify !important;
}
.alert-info{
  background: #fff !important;
  border: 0px !important;
  color: #212529;
}
.first-ul{
  padding: 0px;
  list-style: none;
}
ul{
  list-style: circle;
}
ul li{
  text-align: justify;
  font-size: 15px;
  color: grey;
  padding-top: 10px;
}
.second-ul{
  padding-left: 10px;
  list-style: inside;
}
.bg-danger{
  color: #fff !important;
}
</style>
<script>
  import ROUTER from 'src/router'
  import Vue from 'vue'
  import AUTH from 'src/services/auth'
  import COMMON from 'src/common.js'
  export default{
    mounted(){
      this.getData()
    },
    data(){
      return {
        user: AUTH.user,
        common: COMMON,
        guide: null
      }
    },
    props: {
    },
    methods: {
      redirect(parameter){
        ROUTER.push(parameter)
      },
      getData(){
        $.get('https://spreadsheets.google.com/feeds/cells/1di9gJrHSrzCJ61XitNlNV5zga8v2LHas0VdNVNfNO3I/7/public/values?alt=json', response => {
          let entries = response.feed.entry
          for (var i = 0; i < entries.length; i += 2) {
            if(i > 1){
              let accountType = entries[i].content.$t
              if(accountType === this.user.type){
                this.guide = entries[i + 1].content.$t
                break
              }
            }
          }
        })
      }
    }
  }
</script>
