import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prov: {
      codProvincia: '',
      seleccionada: false,
    },
    listaProv: []
  },
  mutations: {
    selectProv(state, codProvincia) {
      state.prov.codProvincia = codProvincia,
      state.prov.seleccionada = true
    },
    listarProv(state, listaProv) {
      state.listaProv = listaProv.provincias
    }
  },
  actions: {
    selectProv({ commit }, codProvincia) {
      commit('selectProv',codProvincia )
    },
    listarProv({ commit }) {
      api.getListProvincias()
      .then(response => {
        commit('listarProv', response.data)
      })
    }
  },
  modules: {
  }
})
