import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
import routes from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
