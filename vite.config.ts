import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';
import { VitePWA } from 'vite-plugin-pwa';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import { manifest } from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: '',
        enabledCollections: ['heroicons-solid']
      })
    }),
    WindiCSS(),
    VitePWA({
      manifest
    }),
    ViteIcons()
  ]
});
