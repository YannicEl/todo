import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';
import { VitePWA } from 'vite-plugin-pwa';

const manifest = {
  name: 'ToDo',
  short_name: 'ToDo',
  start_url: 'https://todo.yannic.tf/',
  display: 'standalone',
  background_color: '#ffffff',
  description:
    'A simple ToDo app I made for myself but I guess everybody can use it.',
  icons: [
    {
      src: './icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
    },
  ],
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents(),
    WindiCSS(),
    VitePWA({
      manifest,
    }),
  ],
});
