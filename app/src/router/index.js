import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import RegisterPage from '@/pages/RegisterPage'
import EditEventPage from '@/pages/EditEventPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register/:_id',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/edit-event/:_id',
      name: 'edit-event',
      component: EditEventPage
    }

  ]
})
