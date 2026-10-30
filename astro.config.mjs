import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.example.com', // TODO: real domain
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
