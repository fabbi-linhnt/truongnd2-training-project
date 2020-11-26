<template>

  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
  import Header from "@/layout/Header";

  import './styles/app.scss'

  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);

  export default {
    name: 'App',
    components: {
      Header
    },
  }

</script>

