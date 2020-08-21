import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './vant-ui'

Vue.config.productionTip = false;

import '@assets/styles/reset.css'
import '@assets/styles/border.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
