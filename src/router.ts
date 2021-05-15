import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Settings from './components/Settings.vue';
import Test from './components/Test.vue';

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
    path: '/test/',
    component: Test,
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
