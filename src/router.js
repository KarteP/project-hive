import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/map",
      name: "map",
      // route level code-splitting
      // this generates a separate chunk (map.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "map" */ "./views/Map.vue")
    },
    {
      path: "/registration",
      name: "registration",
      component: () =>
        import(
          /* webpackChunkName: "registration" */ "./views/Registration.vue"
        )
    }
  ]
});
