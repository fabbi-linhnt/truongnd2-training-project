import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from './plugins/i18n'
import  './vee-validate'
import { BootstrapVue } from 'bootstrap-vue';
import NProgress from 'vue-nprogress'

Vue.use(BootstrapVue);
Vue.use(NProgress)
Vue.config.productionTip = false;
const nprogress = new NProgress()
const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options)

new Vue({
  nprogress,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
