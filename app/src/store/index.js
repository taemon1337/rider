import Vue from 'vue'
import Vuex from 'vuex'
import FireVuex from 'firevuex'
import Api from '@/api'
import currentUser from './modules/currentUser'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    currentUser: currentUser
  }
})

FireVuex.bindDatabase(store, Api.firebase, {
  'events': { source: 'events', type: 'array' },
  'riders': { source: 'riders', type: 'array' },
  'horses': { source: 'horses', type: 'array' },
  'entries': { source: 'entries', type: 'array' }
})

export default store

