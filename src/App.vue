<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  max-width: 750px;
  margin: 0 auto;
}
</style>
