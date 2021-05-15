import { defineConfig } from 'vite-plugin-windicss';
import formsPlugin from 'windicss/plugin/forms';
import colors from 'windicss/colors';

export default defineConfig({
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    colors: {
      ...colors,
      black: '#2C2C2C',
      white: '#ffffff',
      blue: {
        'DEFAULT': '#279AF1',
        '100': '#E7F4FD',
        '200': '#B7DDFA',
        '300': '#87C7F7',
        '400': '#57B0F4',
        '500': '#279AF1',
        '600': '#0E80D7',
        '700': '#0B64A7',
        '800': '#084777',
        '900': '#052B47',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
  ],
  plugins: [formsPlugin],
});
