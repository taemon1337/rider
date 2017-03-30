import { HorseTypes } as types from '../mutation-types'
import Api from '@/api'

const state = {
  all: []
}

const getters = {
  [HorseTypes.findAll]: state => state.all
}

const actions = {
  [HorseTypes.findAll] ({ commit }) {
    Api.findAll('horses').then(function (horses) {
      commit(HorseTypes.findAll, { horses })
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

