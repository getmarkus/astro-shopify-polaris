import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/shopify-polaris-astro',
  build: {
    assets: 'astro'
  },
  integrations: [react()]
});