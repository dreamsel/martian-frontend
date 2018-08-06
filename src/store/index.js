import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    field: []
  },
  getters: {
  },
  mutations: {
    setField(state, field) {
      state.field = field
    }
  },
  actions: {
    fetchField({commit}) {
      return http.get('/field')
        .then((response) => {
          if (response.success) {
            commit('setField', response.field)
          }
          return response
        })
        .catch(ex => console.log(ex.message))
    }
  }
})

export default store
