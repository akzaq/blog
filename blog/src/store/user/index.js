import { SAVE_TOKEN, DELETE_TOKEN } from './mutations_type'
const state = {
  token: localStorage.getItem('token'),
}
const mutations = {
  [SAVE_TOKEN](state, payload) {
    state.token = payload
  },
  [DELETE_TOKEN](state) {
    state.token = ''
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
