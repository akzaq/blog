import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    article,
    user,
  },
})
