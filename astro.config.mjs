// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  adapter: netlify()
});