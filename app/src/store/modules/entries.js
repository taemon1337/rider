import { EntryTypes } as types from '../mutation-types'
import Api from '@/api'

const state = {
  all: []
}

const getters = {
  [EntryTypes.findAll]: state => state.all
}

const actions = {
  [EntryTypes.findAll] ({ commit }) {
    Api.findAll('entries').then(function (entries) {
      commit(EntryTypes.findAll, { entries })
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

