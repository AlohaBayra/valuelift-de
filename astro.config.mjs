// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://valuelift.de',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Funnel-/Bestätigungsseiten (noindex) gehören nicht in die Sitemap
      filter: (page) =>
        !page.includes('/danke/') && !page.includes('/willkommen/'),
    }),
  ],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  vite: {
    plugins: [tailwindcss()],
  },
});
