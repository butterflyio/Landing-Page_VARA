import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://butterflyio.github.io',
  base: '/Landing-Page_VARA',
  vite: {
    plugins: [tailwindcss()]
  }
});
