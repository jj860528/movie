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

//TMDB api
Vue.prototype.apiKey = "1c6690deaaf9d0ad5da4165c1a00a722";
Vue.prototype.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzY2OTBkZWFhZjlkMGFkNWRhNDE2NWMxYTAwYTcyMiIsInN1YiI6IjVjNDcwNzhiYzNhMzY4NDc4Yzg1ZDBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uh3Q_bO_S3nR4llL9_T38xjzBhtUPjUo18pSMsnQ0MQ";
Vue.prototype.account_id = "5c47078bc3a368478c85d0d0";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
