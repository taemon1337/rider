import Api from '@/api'

let ridersRef = Api.database.ref('riders')

let toArray = function (obj) {
  let arr = []
  for (var key in obj) {
    obj[key]['.key'] = key
    arr.push(obj[key])
  }
  return arr
}

let toObject = function (item) {
  let obj = {}
  obj[item['.key']] = {}
  for (var key in item) {
    if (key !== '.key') {
      obj[item['.key']][key] = item[key]
    }
  }
  return obj[item['.key']]
}

const state = {
  all: []
}

const getters = {
  'riders/get': state => state.all
}

const actions = {
  'riders/watch' ({ commit }) {
    ridersRef.on('value', function (snap) {
      commit('riders/update', toArray(snap.val()))
    })
  },
  'riders/add' ({ commit }, rider) {
    ridersRef.push(rider)
  },
  'riders/update' ({ commit }, rider) {
    ridersRef.child(rider['.key']).update(toObject(rider))
  },
  'riders/remove' ({ commit }, rider) {
    ridersRef.child(rider['.key']).remove()
  }
}

const mutations = {
  'riders/update' (state, riders) {
    state.all = riders
  }
}

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}

