import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        id: 1,
        title: 'Todo One',
        completed: true,
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: false,
      },
      {
        id: 3,
        title: 'Todo three',
        completed: false,
      },

    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
