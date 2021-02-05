<template>
    <div class="align-center ma-5">
        <v-alert color="blue-grey" dark dense icon="mdi-alert-circle" prominent>
            <span  class="mr-4">{{mensaje}}</span>
        </v-alert>
    </div>
</template>

<script>
export default {
    props: {
        mensaje:{}
    }
}
</script>