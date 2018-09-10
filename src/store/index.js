import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    field: [],
    players: [],
    player: {}
  },
  getters: {
  },
  mutations: {
    setField(state, field) {
      state.field = field
    },
    setPlayers(state, players) {
      state.players = players
    },
    setPlayer(state, player) {
      state.player = player
    }
  },
  actions: {
    fetchField({commit}, playerId) {
      return http.get(`/field/${playerId}`)
        .then((response) => {
          if (response.success) {
            commit('setField', response.field)
            commit('setPlayer', response.player)
          }
          return response
        })
        .catch(ex => console.log(ex.message))
    }
  }
})

export default store
