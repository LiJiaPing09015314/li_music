import Vue from "vue";
import VueRouter from "vue-router";
const navIndex=()=>import('@/views/nav/index');
Vue.use(VueRouter);
const findIndex=()=>import('@/views/findIndex/findIndex')

const routes = [
  {
    path: "/",
    name: "main",
    component: navIndex,
    redirect: '/find',
    children:[
      { path: '/find', component: findIndex },
    ]
    
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
