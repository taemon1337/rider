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

      <date-picker></date-picker>

      <md-input-container>
        <label>Event Image</label>
        <md-file v-model="form.image" accept="image/*"></md-file>
      </md-input-container>

      <md-input-container>
        <label>Details</label>
        <md-textarea maxlength="1000" rows="4" :value="form.content" required></md-textarea>
      </md-input-container>

      <md-button class="md-raised md-primary" @click.native="save">Save</md-button>
      <md-button class="md-raised" @click.native="$router.back()">Cancel</md-button>
    </form>
  </div>
</template>

<script>
  import DatePicker from '@/components/DatePicker'
  import { mapState } from 'vuex'

  export default {
    name: 'EditEventPage',
    data () {
      return {
        form: {}
      }
    },
    components: {
      DatePicker
    },
    computed: {
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
          this.$store.dispatch('events/update', Object.assign({ uid: this.$route.params.id }, this.form))
        }
        this.form = {}
        this.$router.back()
      }
    },
    created () {
      window.router = this.$router
    }
  }
</script>

