<template>
  <div style="padding:15px;">
    <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
      <md-card md-with-hover v-for="ecard in events" key="_id" style="width:100%;margin:15px;padding:15px;">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ ecard.title }}</div>
            <div class="md-subhead">{{ ecard.subtitle }}</div>
          </md-card-header-text>

          <md-menu md-size="4" md-direction="bottom left">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item>
                <router-link :to="{ path: '/edit-event', params: { _id: ecard._id }}">
                  <md-icon>mode_edit</md-icon>
                  Edit Event
                </router-link>
              </md-menu-item>

              <md-menu-item>
                <router-link :to="{ path: '/register', params: { _id: ecard._id }}">
                  <md-icon>person_add</md-icon>
                  Register Rider
                </router-link>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </md-card-header>

        <md-card-media>
          <img :src="ecard.image" alt="Stellar Horse Show" style="width:150px;">
        </md-card-media>

        <md-card-content>
          {{ ecard.content }}

          <router-link :to="{ path: 'register', params: { _id: ecard._id }}">
            <md-button class="md-primary md-raised">Register Rider</md-button>
          </router-link>
        </md-card-content>
      </md-card>
    </md-layout>
  </div>
</template>

<script>
  export default {
    name: 'EventsPage',
    data () {
      return {
        events: [
          {
            _id: 1,
            title: 'Show 1',
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
    }
  }
</script>

