// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/common.scss'
// import 'lib-flexible/flexible.js'
import * as toMoney from './filter/money.js'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false
Vue.use(MintUI)

Object.keys(toMoney).forEach(key => {
  Vue.filter(key, toMoney[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
