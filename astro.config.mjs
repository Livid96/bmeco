import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/edu-portal',
  integrations: [tailwind()],
});
