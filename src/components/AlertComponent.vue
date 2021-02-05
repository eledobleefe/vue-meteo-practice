<template>
    <v-container class="align-center ma-10">
        <v-alert :color="color" dark dense icon="mdi-alert-circle" prominent>
            <span  class="mr-4">{{mensaje}}</span>
        </v-alert>
        <v-container v-if="volver" class="d-flex justify-center">
            <v-btn :color="color" dark :href="volver">
              Volver
            <v-icon dark right>
              mdi-arrow-left-circle
            </v-icon>
          </v-btn>
        </v-container>
    </v-container>
</template>

<script>
export default {
    props: {
        mensaje:{},
        color: {},
        volver: null
    }
}
</script>