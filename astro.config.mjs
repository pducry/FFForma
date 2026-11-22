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
      filter: (page) => {
        if (page.includes('/404')) return false;
        const path = new URL(page).pathname;
        if (path.startsWith('/work/')) return false;
        if (path === '/info/' || path === '/experiments/') return false;
        return true;
      },
      customPages: experiments.map((slug) => `https://ffforma.design/experiments/${slug}/`),
    }),
  ],
});
