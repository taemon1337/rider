<template>
  <md-layout md-gutter style="padding:15px;">
    <md-layout md-flex-xsmall="100">
      <md-card md-with-hover v-for="ecard in events" key="_id" style="width:450px;margin:15px;padding:15px;">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ ecard.title }}</div>
            <div class="md-subhead">
              {{ ecard.subtitle }}
              <br>
              {{ ecard.date }}
            </div>
          </md-card-header-text>

          <md-menu v-if="canEdit" md-size="4" md-direction="bottom left">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item @selected="$router.push({ path: '/edit-event/' + ecard._id })">
                <md-icon>mode_edit</md-icon>
                Edit Event
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </md-card-header>

        <md-card-media>
          <img :src="ecard.image" alt="Stellar Horse Show" style="width:150px;">
        </md-card-media>
        <br>

        <md-card-expand>
          <md-card-actions v-if="!currentUser">
            <md-button class="md-raised md-primary" @click.native="login">Sign in to Register</md-button>
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-actions>
          <md-card-actions v-else>
            <router-link :to="{ path: '/register/' + ecard._id }">
              <md-button class="md-primary md-raised">Register Rider</md-button>
            </router-link>
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-actions>

          <md-card-content>
            {{ ecard.content }}<br>
          </md-card-content>
        </md-card-expand>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'

  export default {
    name: 'EventsPage',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        isAdmin: 'isAdmin',
        events: 'events/get'
      }),
      ...mapState({
        currentUser: state => state.currentUser.currentUser
      })
    },
    methods: {
      ...mapActions(['login', 'logout']),
      canEdit (evt) {
        return this.isAdmin() || evt.owner.email === this.currentUser.email
      }
    }
  }
</script>

