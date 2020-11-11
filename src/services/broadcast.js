// src/auth/index.js
import { router } from 'src/router/index'
import ROUTER from 'src/router'
import { Howl } from 'howler'
import Vue from 'vue'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import Config from 'src/config.js'
import COMMON from 'src/common.js'
import AUTH from 'src/services/auth'

export default {
  accountStatus(id, flag) {
    let vue = new Vue()
    let parameter = {
      id: id,
      status: flag
    }
    vue.APIRequest('broadcasts/account_status', parameter).then(response => {
    })
  }
}
