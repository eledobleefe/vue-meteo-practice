<template>
  <div id="selectProv" v-if="listProv">
      <v-row justify="center">
        <v-col class="d-flex" cols="6">
          <v-select
            :items="listProv"
            v-model="provSelected"
            name="provincia"
            item-value="CODPROV"
            item-text="NOMBRE_PROVINCIA"
                        label="Selecciona una provincia"
            return object
            outlined
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="d-flex" cols="2">
          <v-btn class="ma-2" color="teal" dark @click="selectProv">
            <router-link
              class="white--text text-decoration-none"
              to="/provincia"
            >
              Listo
            </router-link>
            <v-icon dark right>
              mdi-checkbox-marked-circle
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "SelectProvincias",
  props: {
    listProv: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      provSelected: "",
    };
  },
  methods: {
    ...mapMutations(["seleccionarProv"]),
    selectProv() {
      var codigo = this.provSelected;
      //var nombre = this.provSelected.NOMBRE_PROVINCIA
      this.seleccionarProv({
        codProvincia: codigo,
        //nameProvincia: nombre,
        seleccionada: true,
      });
    }
  },
  computed: {
    ...mapState(["prov"]),
  },
};
</script>
