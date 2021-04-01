import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/styles.css'
import ApiRequest from './classes/ApiRequest'
import axios from 'axios'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/styles.scss'

Vue.prototype.$http = axios
Vue.prototype.$request = ApiRequest

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
