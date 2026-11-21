import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const experiments = [
  'circular-share-menu',
  'text-highlight-on-scroll',
  'liquid-glass',
  'thinking-orb',
  'magnetic-avatar',
  'warp-gallery',
];

export default defineConfig({
  site: 'https://ffforma.design',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      customPages: experiments.map((slug) => `https://ffforma.design/experiments/${slug}/`),
    }),
  ],
});
