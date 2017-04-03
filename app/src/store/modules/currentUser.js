import Firebase from 'firebase'
import { CurrentUserTypes } from '@/store/mutation-types'

const admins = ['timstello@gmail.com']

const provider = new Firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

const state = {
  currentUser: null,
  accessToken: null
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
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    let accessToken = JSON.parse(sessionStorage.getItem('accessToken'))

    if (currentUser) {
      commit(CurrentUserTypes.login, { currentUser: currentUser, accessToken: accessToken })
    } else {
      Firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
          commit(CurrentUserTypes.login, { currentUser: result.user, accessToken: result.credential.accessToken })
        }
      }).catch(function (error) {
        console.log('LOGIN ERROR: ', error)
      })
    }
  },
  [CurrentUserTypes.login] ({ commit }) {
    Firebase.auth().signInWithRedirect(provider)
  },
  [CurrentUserTypes.logout] ({ commit }) {
    commit(CurrentUserTypes.logout)
  }
}

const mutations = {
  [CurrentUserTypes.login] (state, payload) {
    if (payload.currentUser) {
      state.currentUser = payload.currentUser
      state.accessToken = payload.accessToken
      sessionStorage.setItem('currentUser', JSON.stringify(payload.currentUser))
      sessionStorage.setItem('accessToken', JSON.stringify(payload.accessToken))
    }
  },
  [CurrentUserTypes.logout] () {
    state.currentUser = null
    state.accessToken = null
    sessionStorage.removeItem('currentUser')
    sessionStorage.removeItem('accessToken')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
