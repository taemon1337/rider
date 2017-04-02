<template>
  <div style="padding:15px 25px;">
    <form @submit.stop.prevent="submit">
      <h1>Edit Event: {{ form.title }}</h1>

      <md-input-container>
        <label>Title</label>
        <md-input v-model="form.title" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Subtitle</label>
        <md-input v-model="form.subtitle" required></md-input>
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

      <md-button class="md-raised md-primary" type="submit">Save</md-button>
      <md-button class="md-raised" @click.native="$router.back()">Cancel</md-button>
    </form>
  </div>
</template>

<script>
  import DatePicker from '@/components/DatePicker'

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
    created () {
      var self = this
      if (self.$route.params.id) {
        self.form._id = self.$route.params.id
      }
      if (self.form._id) {
        self.find(self.form._id).then(function (model) {
          self.form = Object.assign({}, model)
        })
      }
    }
  }
</script>

