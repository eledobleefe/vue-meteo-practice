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
          <v-btn class="m-auto" color="teal" dark @click="selectProv">
              Listo
            <v-icon dark right>
              mdi-checkbox-marked-circle
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <div v-if="showMessageProvEmpty">
          <Alerta :mensaje= "messageProvEmpty"/>
        </div>
      </v-row>
  </div>
</template>

<script>
import Alerta from './AlertComponent';
export default {
  name: "SelectProvincias",
  components: {
    Alerta
  },
  props: {
    listProv: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      provSelected: '',
      messageProvEmpty: 'Por favor seleccione una provincia',
      showMessageProvEmpty: false
    };
  },
  methods: {
    selectProv() {
      if (this.provSelected === '') {
        this.showMessageProvEmpty = true
      } else {
        this.$store.dispatch('selectProv', this.provSelected).then(() => {
          this.showMessageProvEmpty = false
          this.$router.push({name: 'Provincia'})
        })
      }
    }
  }
};
</script>
