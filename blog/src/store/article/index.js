import { SAVE_ARTICLE, SAVE_TITLE, SAVE_DATE } from './mutations_type'

const state = {
  article: {
    title: '',
    insert: '',
    date: Number,
  },
}

const mutations = {
  [SAVE_ARTICLE](state, payload) {
    state.article.insert = payload
  },
  [SAVE_TITLE](state, payload) {
    state.article.title = payload
  },
  [SAVE_DATE](state, payload) {
    state.article.date = payload
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
