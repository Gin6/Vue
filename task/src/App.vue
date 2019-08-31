<template>
  <div>
    <v-index></v-index>
    <v-button></v-button>
  </div>
</template>

<script>
import index from './components/Index.vue'
import button from './components/Ripplebutton.vue'

export default {
  components: {
    'v-index': index,
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