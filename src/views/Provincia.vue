<template>
  <div>
    <v-layout wrap="true" v-if="infoProvincia">
      <v-card class="mx-auto" max-width="800">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>{{ infoProvincia.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <a href="/" class="white--text text-decoration-none"><v-icon>mdi-close</v-icon></a>
          </v-btn>
        </v-toolbar>

        <v-container fluid>
          <v-row class="ma-4">
            <v-col cols="12">
              <v-card color="secondary" dark>
                <v-card-title class="headline">
                  Hoy
                </v-card-title>
                <v-card-text>
                  {{ infoProvincia.today.p }}
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="secondary" dark>
                <v-card-title class="headline">
                  Mañana {{ calcularFecha() }}
                </v-card-title>
                <v-card-text>
                  {{ infoProvincia.tomorrow.p }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-container fluid>
          <v-row class="mx-4" justify="space-between"> 
            <v-card
              v-for="(ciudad, i) in infoProvincia.ciudades"
              :key="i"
              class="mx-auto my-4"
              width="320"
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    {{ ciudad.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >{{fecha}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                <v-row align="center" class="ma-0 pa-0">
                  <v-col cols="8">
                    <v-row>
                      <v-col cols="4">
                        <v-icon>mdi-thermometer-plus</v-icon> Máx
                      </v-col>
                      <v-col cols="8" class=" text-right">
                        <span class="text-h2">
                          {{ ciudad.temperatures["max"] }}
                        </span>
                        <sup> &deg;C</sup>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                       <v-icon>mdi-thermometer-minus</v-icon> Mín
                      </v-col>
                      <v-col cols="8" class=" text-right">
                        <span  class="text-h4 pr-4"> {{ ciudad.temperatures["min"] }}</span>
                        <sup>  &deg;C</sup>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <!--v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                      alt="Sunny image"
                      width="92"
                    ></v-img>-->
                    <v-icon class="iconoTiempo" :class="ciudad.stateSky['description']">
                      {{ mostrarIcono(listaIconos, ciudad.stateSky["id"]) }}
                    </v-icon>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-row>
          </v-container>
        </v-container>
      </v-card>
    </v-layout>
    <v-layout v-else-if="loadingProv">
      <SkeletonLoader />
    </v-layout>
    <v-layout v-else-if="erroredProv">
      <Alerta :mensaje="mensajeError" :color="colorError" :volver="volverError"/>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from '@/api';
import SkeletonLoader from '@/components/SkeletonLoaderComponent';
import Alerta from '@/components/AlertComponent';
import ListaIconos from '@/assets/datos/estadoCielo';

export default {
  name: "provincia",
  components: {
    SkeletonLoader,
    Alerta
  },
  data() {
    return {
      infoProvincia: null,
      loadingProv: true,
      erroredProv: false,
      mensajeError: 'No se ha podido cargar la información',
      colorError:'blue-grey',
      volverError:'/',
      fecha: '',
      listaIconos: ListaIconos
    };
  },
  computed: {
    ...mapState(["prov"])
  },
  methods: {
    calcularFecha() {
      const fechaActual  = new Date().toISOString().substring(0,10);
      const arrayFecha = fechaActual.split(['-'])
      const meses = ['enero', 'febrero', 'marzo',
                    'abril', 'mayo', 'junio',
                    'julio', 'agosto', 'septiembre',
                    'octubre', 'noviembre', 'diciembre']
      this.fecha = arrayFecha[2] + ' de ' + meses[(parseInt(arrayFecha[1])) - 1] + ', ' + arrayFecha[0]
    },
    mostrarIcono(lista, identificador) {
      let listaCompleta = lista.estado;
      let icono = "mdi-help-circle";
      for(let i = 0; i < listaCompleta.length; i++) {
        let listaId = listaCompleta[i].id;
        if(listaId.find(id => id == identificador)) {
          icono = listaCompleta[i].icon;
        } 
      }
      return icono;
    }
    
  },
  mounted() {
    api.getTiempoProvincia(this.prov.codProvincia)
    .then((response) => {
      this.infoProvincia = response.data;
    })
    .catch((error) => {
      console.log(error);
      this.erroredProv = true;
    })
    .finally(() => (this.loadingProv = false));
  }
};
</script>

<style scoped>
  .iconoTiempo {
    font-size: 90px;
    color:teal;
  }
  .v-icon[class*="sun"] {
    color:yellow
  }
  .v-icon[class*="cloud"] {
    color:skyblue
  }
  .v-icon[class*="partly"]{
    color:lightskyblue
  }
  .v-icon[class*="rain"],
  .v-icon[class*="pour"] {
    color:steelblue
  }
  .v-icon[class*="snow"] {
    color:lightblue
  }
  .v-icon[class*="fog"] {
    color:paleturquoise
  }
  .v-icon[class*="windy"] {
    color:silver
  }
</style>