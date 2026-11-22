export interface Experiment {
  slug: string;
  num: string;
  title: string;
  /** Day the piece was added to the repo. */
  date: string;
  tags: string[];
  blurbKey: string;
}

export const experiments: Experiment[] = [
  {
    slug: 'circular-share-menu',
    num: '001',
    title: 'Circular Share Menu',
    date: '2026-08-16',
    tags: ['interaction'],
    blurbKey: 'exp.001',
  },
  {
    slug: 'text-highlight-on-scroll',
    num: '002',
    title: 'Text Highlight on Scroll',
    date: '2026-08-16',
    tags: ['type', 'scroll'],
    blurbKey: 'exp.002',
  },
  {
    slug: 'liquid-glass',
    num: '003',
    title: 'Liquid Glass',
    date: '2026-08-16',
    tags: ['material'],
    blurbKey: 'exp.003',
  },
  {
    slug: 'thinking-orb',
    num: '004',
    title: 'Thinking Orb',
    date: '2026-08-16',
    tags: ['motion'],
    blurbKey: 'exp.004',
  },
  {
    slug: 'magnetic-avatar',
    num: '005',
    title: 'Magnetic Avatar',
    date: '2026-08-16',
    tags: ['motion'],
    blurbKey: 'exp.005',
  },
  {
    slug: 'warp-gallery',
    num: '006',
    title: 'Warp Gallery',
    date: '2026-08-16',
    tags: ['gallery'],
    blurbKey: 'exp.006',
  },
];

export const experimentTags = [...new Set(experiments.flatMap((item) => item.tags))];
