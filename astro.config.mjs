// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), netlify()],
  output: 'server',
  experimental: {
    session:true
  },
  site: 'https://elanaguinevere.github.io',
  base: '/my-portfolio',
  adapter: netlify({cacheOnDemandPages: true,}),

});