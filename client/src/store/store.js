import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
// It can never be modified unless through action or mutation
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    }
  }
})
