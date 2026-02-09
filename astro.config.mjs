import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Force it to use the GitHub URL
  site: 'https://butterflyio.github.io', 
  base: '/Landing-Page_VARA', 
  vite: {
    plugins: [tailwindcss()]
  }
});