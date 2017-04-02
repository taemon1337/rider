import Firebase from 'firebase'

const admins = ['timstello@gmail.com']

const provider = new Firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

const state = {
  currentUser: null,
  accessToken: null
}

const getters = {
  currentUser: state => state.currentUser,
  accessToken: state => state.accessToken,
  isAdmin: state => state.currentUser && admins.indexOf(state.currentUser.email) >= 0
}

const actions = {
  isLoggedIn ({ commit }) {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    let accessToken = JSON.parse(sessionStorage.getItem('accessToken'))

    if (currentUser) {
      commit('login', { currentUser: currentUser, accessToken: accessToken })
    } else {
      Firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
          commit('login', { currentUser: result.user, accessToken: result.credential.accessToken })
        }
      }).catch(function (error) {
        console.log('LOGIN ERROR: ', error)
      })
    }
  },
  login ({ commit }) {
    Firebase.auth().signInWithRedirect(provider)
  },
  logout ({ commit }) {
    commit('logout')
  }
}

const mutations = {
  login (state, payload) {
    if (payload.currentUser) {
      state.currentUser = payload.currentUser
      state.accessToken = payload.accessToken
      sessionStorage.setItem('currentUser', JSON.stringify(payload.currentUser))
      sessionStorage.setItem('accessToken', JSON.stringify(payload.accessToken))
    }
  },
  logout () {
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
