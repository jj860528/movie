import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexPage: "/"
  },
  mutations: {
    indexPage(state, page) {
      this.state.indexPage = page;
    }
  },
  actions: {}
});
