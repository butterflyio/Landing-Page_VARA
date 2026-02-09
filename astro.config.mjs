import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zainkhan.me',
  base: '/Landing-Page_VARA',
  vite: {
    plugins: [tailwindcss()]
  }
});