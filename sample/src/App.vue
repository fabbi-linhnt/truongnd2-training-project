<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
  import Header from "@/components/Header";

  import './styles/app.scss'
  import i18n from './plugins/i18n.js'

  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);

  export default {
    name: 'App',
    components: {
      Header
    }
  }

</script>

<style lang="scss">

</style>
