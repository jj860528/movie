import Vue from "vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from "axios";
import VueAxios from "vue-axios";
import "./icon/style.css";
import App from "./App.vue";

Vue.prototype.$ajax = axios;

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
