<template>
  <div id="home">
    <v-container class="align-center">
      <h1 class="display-1 text-center white--text">Bienvenido/a</h1>
      <p class="text-center white--text">a tu app del tiempo</p>
      <SelectProvincias :showSelect = "showSelect"/>
      <Alerta :mensaje= "mensajeError" :color="color" :volver="volver" v-if="errored"/>
    </v-container>
  </div>
</template>

<script>
import SelectProvincias from '@/components/SelectProvincias'
import Alerta from '@/components/AlertComponent'
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    SelectProvincias,
    Alerta 
  },
  created() {
    this.getListProvincias();
  },
  data() {
    return {
      loading: true,
      errored: false,
      showSelect: false,
      mensajeError:'No se ha podido obtener información',
      color:'blue-grey',
      volver:false
    }
  },
   methods: {
    getListProvincias() {
      this.$store.dispatch('listarProv')
      .catch((error) => {
         console.log(error);
         this.errored = true;
      })
      .finally(() => (
        this.loading = false,
        this.showSelect = true
        ));
    }
  },
  computed: {
    ...mapState(["listaProv"]),
  },
};
</script>
