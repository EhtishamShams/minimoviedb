import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/movie/guardians-of-the-galaxy-2',
  },
  {
    path: '/movie/:slug',
    name: 'movie-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieDetails.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
