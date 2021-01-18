import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prov: {
      codProvincia: '',
      seleccionada: false,
    },
  },
  mutations: {
    selectProv(state, codProvincia) {
      state.prov.codProvincia = codProvincia,
      state.prov.seleccionada = true
    }
  },
  actions: {
    selectProv({ commit }, codProvincia) {
      commit('selectProv',codProvincia )
    }
  },
  modules: {
  }
})
