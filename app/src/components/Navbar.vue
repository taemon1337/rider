<template>
  <md-toolbar>
    <a href="/#/">
      <img :src="logo" style="width:70px;">
      <img :src="logotext">
    </a>

    <h2 class="md-title" style="flex: 1"></h2>

    <md-button v-if="canAddEvent" @click.native="$router.push('/edit-event/new')" class="md-raised md-primary">Add Your Show</md-button>

    <span v-if="!currentUser">
      <md-button @click.native="login">
        <img :src="googleLoginLogo">
      </md-button>
    </span>
    <span v-else>
      <md-menu>
        <md-avatar class="md-large" md-menu-trigger>
          <img :src="currentUser.photoURL" alt="Profile">
        </md-avatar>

        <md-menu-content>
          <md-menu-item @selected="logout">
            Sign out
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </span>
  </md-toolbar>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { CurrentUserTypes } from '@/store/mutation-types'

  export default {
    name: 'Navbar',
    data () {
      return {
        logo: '/static/saddle-logo.png',
        logotext: '/static/stellar-logo.png',
        googleLoginLogo: '/static/btn_google_signin_dark_normal_web.png'
      }
    },
    computed: {
      ...mapState({
        currentUser: state => state.currentUser.currentUser
      })
    },
    methods: {
      ...mapActions({
        login: CurrentUserTypes.login,
        logout: CurrentUserTypes.logout
      }),
      canAddEvent () {
        return this.currentUser
      }
    }
  }
</script>

