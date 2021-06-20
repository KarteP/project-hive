import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import VueGoogleHeatmap from 'vue-google-heatmap';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: "mdi"
});

Vue.use(VueGoogleHeatmap, {
  apiKey: "AIzaSyAztbxP6xFMuN1VYaK2RkVLAeIvYHmKLNw"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
