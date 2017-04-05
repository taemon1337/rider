<template>
  <div style="padding:15px 25px;">
    <form>
      <h1>Edit Event: {{ form.title }}</h1>

      <md-input-container>
        <label>Title</label>
        <md-input v-model="form.title" maxlength="50" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Subtitle</label>
        <md-input v-model="form.subtitle" maxlength="150" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Event Image</label>
        <md-file v-model="form.image" accept="image/*"></md-file>
      </md-input-container>

      <md-input-container style="width:250px;">
        <label>Select Date</label>
        <md-input v-model="form.date" type="datetime-local"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Details</label>
        <md-textarea maxlength="1000" rows="4" v-model="form.content" required></md-textarea>
      </md-input-container>

      <md-button class="md-raised md-primary" @click.native="save">Save</md-button>
      <md-button class="md-raised" @click.native="$router.back()">Cancel</md-button>
    </form>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'EditEventPage',
    data () {
      return {
        form: {}
      }
    },
    components: {
    },
    computed: {
      ...mapGetters({
        events: 'events/get'
      }),
      ...mapState({
        currentUser: state => state.currentUser.currentUser
      })
    },
    methods: {
      save () {
        if (this.$route.params.id === 'new') {
          this.form.owner = {
            uid: this.currentUser.uid,
            displayName: this.currentUser.displayName,
            email: this.currentUser.email
          }
          this.$store.dispatch('events/add', this.form)
        } else {
          this.$store.dispatch('events/update', Object.assign({ '.key': this.$route.params.id }, this.form))
        }
        this.form = {}
        this.$router.back()
      }
    },
    created () {
      console.log('CREATED', this.events)
      let self = this
      if (self.$route.params.id !== 'new') {
        let evt = self.events.filter(function (evt) { return evt['.key'] === self.$route.params.id })[0]
        if (evt) {
          for (var key in evt) {
            self.form[key] = evt[key]
          }
        }
      }
    }
  }
</script>

