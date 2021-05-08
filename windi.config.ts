import { defineConfig } from 'vite-plugin-windicss';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: '#2C2C2C',
      white: '#ffffff',
      danger: '#ae1616 ',
      blue: '#279AF1',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [formsPlugin],
});
