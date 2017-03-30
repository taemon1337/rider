import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import riders from './modules/riders'
import horses from './modules/horses'
import entries from './modules/entries'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    riders,
    horses,
    entries
  },
  strict: debug
})
