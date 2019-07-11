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

// import Vuex from 'vuex' // 不必要的引入?
import store from './store'

Vue.component('icon', vueIconfont)

Vue.use(ElementUI)
// Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
