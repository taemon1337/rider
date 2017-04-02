// import Api from '@/api'
import VuexFire from 'vuexfire'
import { EventTypes } from '@/store/mutation-types'
import { Bind } from '@/store'

const state = {
  items: []
}

const getters = {
  [EventTypes.findAll]: state => state.items
}

const actions = {
  setItemsRef (state, ref) {
    Bind('items', ref)
  }
}

const mutations = VuexFire.mutations

export default {
  state,
  getters,
  actions,
  mutations
}
