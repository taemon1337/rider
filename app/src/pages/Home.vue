<template>
  <md-layout md-gutter>
    <md-layout md-column md-gutter>
      <events-page></events-page>
    </md-layout>
  </md-layout>
</template>
<script>
  import EventsPage from '@/pages/EventsPage'

  export default {
    name: 'Home',
    data () {
      return {}
    },
    components: {
      EventsPage
    }
  }
</script>
