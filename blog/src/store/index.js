import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
// import { SAVE_ARTICLE } from './article/mutations_type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // article: {
    //   title: '',
    //   insert: '',
    // },
  },
  mutations: {
    // [SAVE_ARTICLE](state, payload) {
    //   state.article.insert = payload
    // },
  },
  getters: {},
  actions: {},
  modules: {
    article,
  },
})
