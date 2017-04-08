import Firebase from 'firebase'
import { CurrentUserTypes } from '@/store/mutation-types'

const admins = ['timstello@gmail.com']

const provider = new Firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

const state = {
  currentUser: Firebase.auth().currentUser
}

const getters = {
  [CurrentUserTypes.currentUser]: state => state.currentUser,
  [CurrentUserTypes.accessToken]: state => state.accessToken,
  [CurrentUserTypes.isAdmin] (state, getters) {
    return state.currentUser && admins.indexOf(state.currentUser.email) >= 0
  }
}

const actions = {
  [CurrentUserTypes.isLoggedIn] ({ commit }) {
    Firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit(CurrentUserTypes.login, user)
      } else {
        commit(CurrentUserTypes.logout, null)
      }
    })
  },
  [CurrentUserTypes.login] ({ commit }) {
    Firebase.auth().signInWithRedirect(provider)
  },
  [CurrentUserTypes.logout] ({ commit }) {
    commit(CurrentUserTypes.logout)
  }
}

const mutations = {
  [CurrentUserTypes.login] (state, user) {
    state.currentUser = user
  },
  [CurrentUserTypes.logout] () {
    Firebase.auth().signOut().then(function () {
      state.currentUser = null
    }).catch(function (err) {
      console.error('Error signing out.', err)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
