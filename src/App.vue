<template>
  <v-app>
    <v-main class="teal lighten-3">
      <v-container class="align-center">
        <router-view>
          <router-link to="/">Home</router-link>
        </router-view>
        <SelectProvincias
          v-if="!prov.seleccionada"
          :listProv="listProvincias"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SelectProvincias from "./components/SelectProvincias";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    SelectProvincias,
  },

  data() {
    return {
      listProvincias: null,
      loading: true,
      errored: false,
      infoProvincia: null,
      loadingProv: true,
      erroredProv: false,
    };
  },
  methods: {
    getListProvincias() {
      axios
        .get("https://www.el-tiempo.net/api/json/v2/provincias")
        .then((response) => {
          this.listProvincias = response.data.provincias;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.getListProvincias();
  },
  computed: {
    ...mapState(["prov"]),
  },
};
</script>
