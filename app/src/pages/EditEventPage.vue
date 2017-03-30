<template>
  <div style="padding:15px 25px;">
    <form @submit.stop.prevent="submit">
      <h1>Edit Event: {{ event.title }}</h1>
      <md-input-container>
        <label>Title</label>
        <md-input v-model="event.title" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Subtitle</label>
        <md-input v-model="event.subtitle" required></md-input>
      </md-input-container>

      <date-picker></date-picker>

      <md-input-container>
        <label>Details</label>
        <md-textarea maxlength="1000" rows="4" v-model="event.details" required></md-textarea>
      </md-input-container>

    </form>
  </div>
</template>

<script>
  import DatePicker from '@/components/DatePicker'

  export default {
    name: 'EditEventPage',
    data () {
      return {
        event: {
          title: null,
          subtitle: null,
          description: null,
          date: null,
          time: null
        }
      }
    },
    components: {
      DatePicker
    }
  }
</script>

