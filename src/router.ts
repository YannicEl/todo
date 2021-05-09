import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Settings from './components/Settings.vue';

const history = createWebHistory();

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/settings/',
    component: Settings,
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
