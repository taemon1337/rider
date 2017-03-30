import { RiderTypes } as types from '../mutation-types'
import Api from '@/api'

const state = {
  all: []
}

const getters = {
  [RiderTypes.findAll]: state => state.all
}

const actions = {
  [RiderTypes.findAll] ({ commit }) {
    Api.findAll('riders').then(function (riders) {
      commit(RiderTypes.findAll, { riders })
    })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}

