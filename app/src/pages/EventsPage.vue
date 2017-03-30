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

          <md-menu md-size="4" md-direction="bottom left">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item @selected="$router.push({ path: '/edit-event/' + ecard._id })">
                <md-icon>mode_edit</md-icon>
                Edit Event
              </md-menu-item>

              <md-menu-item @selected="$router.push({ path: '/register/' + ecard._id})">
                <md-icon>person_add</md-icon>
                Register Rider
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </md-card-header>

        <md-card-media>
          <img :src="ecard.image" alt="Stellar Horse Show" style="width:150px;">
        </md-card-media>

        <md-card-content>
          {{ ecard.content }}

          <router-link :to="{ path: '/register/' + ecard._id }">
            <md-button class="md-primary md-raised">Register Rider</md-button>
          </router-link>
        </md-card-content>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
  export default {
    name: 'EventsPage',
    data () {
      return {
        events: [
          {
            _id: 1,
            title: 'Stellar Riding Schooling Show',
            date: 'April 29th, 2017 at 8:00 AM',
            subtitle: 'This is a show!',
            image: '/static/horse-show-1.jpg',
            content: '',
            actions: [
              {
                text: 'Register'
              }
            ]
          },
          {
            _id: 2,
            title: 'Show 2',
            date: 'June 25th, 2017 at 8:00 AM',
            subtitle: 'This is a show!',
            content: '',
            image: '/static/horse-show-1.jpg',
            actions: [
              {
                text: 'Register'
              }
            ]
          }
        ]
      }
    },
    methods: {
      menuItemSelected (e) {
        window.e = e
      }
    }
  }
</script>

