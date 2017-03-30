<template>
  <div style="padding:15px 25px;">
    <md-layout md-gutter>
      <md-layout md-flex-xsmall="100" mx-flex-small="50" md-gutter>
        <add-riders></add-riders>
      </md-layout>
      <md-layout md-flex-xsmall="100" mx-flex-small="50" md-gutter>
        <add-horses></add-horses>
      </md-layout>
      <md-layout md-flex-xsmall="100" mx-flex-small="50" md-gutter>
        <entries></entries>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
  import AddRiders from '@/components/AddRiders'
  import AddHorses from '@/components/AddHorses'
  import Entries from '@/components/Entries'

  export default {
    name: 'RegisterPage',
    data () {
      return {}
    },
    components: {
      AddRiders,
      AddHorses,
      Entries
    }
  }
</script>

