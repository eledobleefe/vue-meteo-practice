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
    seleccionarProv(state, payload) {
      state.prov.codProvincia = payload.codProvincia,
      state.prov.seleccionada = true
    }
  },
  actions: {
    
  },
  modules: {
  }
})
