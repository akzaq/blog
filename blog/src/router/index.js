import Vue from 'vue'
import Router from 'vue-router'
import articleRoutes from './article'
import userRoutes from './user'

Vue.use(Router)

export default new Router({
  routes: [...articleRoutes, ...userRoutes],
})
