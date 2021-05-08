import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';

const history = createWebHistory();

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home,
  },
];

export const router = createRouter({
  history,
  routes,
});
