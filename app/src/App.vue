<template>
  <div id='app'>
    <a :href="href" target="_blank">
      <img :src="logo">
    </a>
    <router-view></router-view>
  </div>
</template>

<script>
import RegisterPage from '@/pages/RegisterPage'

export default {
  name: 'app',
  data () {
    return {
      href: 'http://stellarriding.com',
      logo: '/static/stellar-logo.png'
    }
  },
  components: {
    RegisterPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
