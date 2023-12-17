import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/astro-shopify-polaris',
  build: {
    assets: 'astro'
  },
  integrations: [react()]
});