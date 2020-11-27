<template>
  <div id="app" class="container"
       v-bind:class="{active : this.$store.state.auth }">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/layout/Header";
import './styles/app.scss'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
#app {
  &.active {
    background-color: #ecf0f1;
  }
}
</style>
