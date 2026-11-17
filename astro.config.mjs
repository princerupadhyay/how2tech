import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain on GitHub Pages => site is the domain, base stays "/".
export default defineConfig({
  site: 'https://how2tech.in',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
