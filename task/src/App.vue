<template>
  <div id="app">
    <v-index></v-index>
    <v-button></v-button>
  </div>
</template>

<script>
import Index from './components/Index.vue'
import button from './components/Ripplebutton.vue'

export default {
  name: 'app',
  components: {
    'v-index': Index,
    'v-button': button
  }
}
</script>

<style lang="scss">
  body {
  	margin: 0px;
  	padding: 0px;
  }
</style>
