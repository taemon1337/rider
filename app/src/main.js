// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Api from './api'
import VueMaterial from 'vue-material'
import { CurrentUserTypes } from '@/store/mutation-types'

window.Api = Api
window.store = store

Vue.use(VueMaterial)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    console.log('starting...')
    store.dispatch(CurrentUserTypes.isLoggedIn)
  }
})
