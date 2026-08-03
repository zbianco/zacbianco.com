// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    'ontap': 'on-tap',
    'tap': 'on-tap',
    'taplist': 'on-tap',
    'tap-list': 'on-tap'
  }
});
