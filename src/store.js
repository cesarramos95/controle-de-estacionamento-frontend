import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post('https://localhost:3000/user/', credentials)
        .then(({ data }) => {
          console.log('user data is', userData)
          commit('SET_USER_DATA', data)
        })
    },
    login({ commit }, credentials) {
      return axios
        .post('https://localhost:3000/user/authenticate/', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    },
  }
});