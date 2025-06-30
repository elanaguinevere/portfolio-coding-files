// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [ netlify()],
  output: 'server',
  experimental: {
    session:true
  },
  site: 'https://elanaguinevere.github.io',
  base: '/my-portfolio',
  adapter: netlify({cacheOnDemandPages: true,}),

});

export default {
  base: '/my-portfolio/',
  // other configs...
};