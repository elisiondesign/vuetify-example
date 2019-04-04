import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/pages/Dashboard.vue';
import LayoutBase from '@/layouts/LayoutBase.vue';
// import LayoutCentered from '@/layouts/LayoutCentered.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutBase,
      children: [{
        path: '',
        component: Dashboard,
      }],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: LayoutCentered,
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
