<template>
  <div id="home">
    <v-container class="align-center">
      <h1 class="display-1 text-center white--text">Bienvenido/a</h1>
      <p class="text-center white--text">a tu app del tiempo</p>
      <SelectProvincias
        :listProv="listProvincias"/>
    </v-container>
  </div>
</template>

<script>
import SelectProvincias from '@/components/SelectProvincias'
import { mapState } from "vuex";
import api from '@/api';

export default {
  name: "home",
  components: {
    SelectProvincias
  },
   mounted() {
    this.getListProvincias();
  },
  data() {
    return {
      listProvincias: null,
      loading: true,
      errored: false,
      infoProvincia: null,
      loadingProv: true,
      erroredProv: false,
    }
  },
   methods: {
    getListProvincias() {
      api.getListProvincias()
      .then((response) => {
         this.listProvincias = response.data.provincias;
      })
      .catch((error) => {
         console.log(error);
         this.errored = true;
      })
      .finally(() => (this.loading = false));
    }
  },
  computed: {
    ...mapState(["prov"]),
  },
};
</script>
