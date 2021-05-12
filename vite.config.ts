import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents, { HeadlessUiResolver } from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [HeadlessUiResolver()],
    }),
    WindiCSS(),
    VitePWA({
      manifest,
    }),
  ],
});
