// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' // 覆盖默认element样式
import '../theme/index.css'
import '@/assets/css/iconCommon.css'

import vueIconfont from './utils/iconComponent.js'

import { webStore } from './utils/browserStorage.js'

// import Vuex from 'vuex' // 不必要的引入?
import store from './store'

import axios from 'axios'

Vue.component('icon', vueIconfont)

Vue.use(ElementUI)
// Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})

myInterceptors()

// http拦截器函数
function myInterceptors () {
  // http request 拦截器
  axios.interceptors.request.use(
    config => {
      let userId = webStore.sessionStore.getStore('userId')
      let roleId = webStore.sessionStore.getStore('roleId')
      if (userId && roleId !== '') {
        config.headers['managerId'] = userId
        config.headers['roleId'] = roleId
      } else {
        console.log('获取不到userId || roleId')
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      if (response.data.code === 0) {
        return response
      } else {
        vm.$notify({
          title: '请求出错',
          type: 'error',
          message: response.data.msg
        })
        return Promise.reject(response.data)
      }
    },
    error => {
      return Promise.reject(error)
    }
  )
}
