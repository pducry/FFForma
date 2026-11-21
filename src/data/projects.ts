export interface ProjectLink {
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  images: string[];
  video?: string;
  /** A URL that was already published on the previous site. */
  external?: ProjectLink;
}

export const projects: Project[] = [
  {
    slug: 'ffforma',
    name: 'FFForma',
    images: [
      '/img/FFForma1.jpg',
      '/img/FFForma2.jpg',
      '/img/ff-56.jpg',
      '/img/ff-60.jpg',
      '/img/ff-id4.jpg',
      '/img/ff-id15.jpg',
      '/img/ff-id21.jpg',
    ],
  },
  {
    slug: 'combustion',
    name: 'Combustion',
    images: [
      '/img/combustion1.jpg',
      '/img/combustion6.jpg',
      '/img/combustion9.jpg',
      '/img/combustion5.jpg',
      '/img/combustion2.jpg',
      '/img/combustion4.jpg',
    ],
  },
  {
    slug: 'pace',
    name: 'Pace',
    images: [
      '/img/pace-1.jpg',
      '/img/pace-2.jpg',
      '/img/pace-3.jpg',
      '/img/pace-4.jpg',
      '/img/pace-5.jpg',
      '/img/pace-6.jpg',
      '/img/pace-7.jpg',
      '/img/pace-8.jpg',
      '/img/pace-9.jpg',
      '/img/pace-10.jpg',
      '/img/pace-11.jpg',
      '/img/pace-12.jpg',
      '/img/pace-13.jpg',
      '/img/pace-14.jpg',
      '/img/pace-15.jpg',
    ],
  },
  {
    slug: 'foracle',
    name: 'Foracle',
    images: [
      '/img/foracle-0.jpg',
      '/img/foracle-1.jpg',
      '/img/foracle-2.jpg',
      '/img/foracle-3.jpg',
      '/img/foracle-5.jpg',
      '/img/foracle-6.jpg',
      '/img/foracle-mobile.jpg',
    ],
    external: { href: 'https://www.goforacle.com' },
  },
  {
    slug: 'artas',
    name: 'Artas',
    images: [],
    video: '/img/artas.mp4',
    external: { href: 'https://pducry.github.io/ARTAS1/' },
  },
];
