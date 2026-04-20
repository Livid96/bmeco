import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://livid96.github.io',
  base: '/bmeco',
  integrations: [tailwind()],
});
