import 'virtual:windi.css';
import './style.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store, key } from './state/store';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW();
  },
});

const app = createApp(App);

app.use(router);
app.use(store, key);
app.mount('#app');
