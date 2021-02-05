<template>
    <v-card class="mx-auto cargando" min-width="800" color="grey lighten-4">
        <v-toolbar color="grey lighten-1">
          <v-toolbar-title></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <a class="white--text"><v-icon>mdi-close</v-icon></a>
          </v-btn>
        </v-toolbar>

        <v-container fluid>
          <v-row class="ma-4">
            <v-col cols="12">
              <v-card color="grey lighten-2" height="50" elevation="0">
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="grey lighten-2" height="50" elevation="0">
              </v-card>
            </v-col>
          </v-row>

          <v-container fluid>
          <v-row class="my-5" justify="space-around"> 
            <v-card width="320" height="250" color="grey lighten-2" elevation="0">
            </v-card>
            <v-card width="320" height="250" color="grey lighten-2" elevation="0">
            </v-card>
          </v-row>
          <v-row class="my-10" justify="space-around"> 
            <v-card width="320" height="250" color="grey lighten-2" elevation="0">
            </v-card>
            <v-card width="320" height="250" color="grey lighten-2" elevation="0">
            </v-card>
          </v-row>
          </v-container>
        </v-container>
      </v-card>
</template>

<style scoped>
  .cargando {
   cursor: wait;
  } 
</style>