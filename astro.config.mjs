import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { copyFile } from 'node:fs/promises';

const sitemapBuildDate = new Date();
const sitemapXmlAlias = {
  name: 'sitemap-xml-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('sitemap-0.xml', dir), new URL('sitemap.xml', dir));
    },
  },
};

// Custom domain on GitHub Pages => site is the domain, base stays "/".
export default defineConfig({
  site: 'https://www.how2tech.in',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: item.lastmod ?? sitemapBuildDate,
          changefreq: 'daily',
          priority: 1.0,
        };
      },
    }),
    sitemapXmlAlias,
  ],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
