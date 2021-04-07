import Vue from 'vue'
import Router from 'vue-router'
import Article from './article'
import Login from '@/views/User/Login'
import Register from '@/views/User/Register'
import Profile from '@/views/User/Profile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    Article,
  ],
})

export default router
