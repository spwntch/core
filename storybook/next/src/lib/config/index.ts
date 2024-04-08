import { IBrand, INavItem } from '@/next-shell';

export const brand: IBrand = {
  logoUrl: {
    light: '/brand/logo-primary.webp',
    dark: '/brand/logo-dark.webp',
  },
  markUrl: {
    light: '/brand/mark-primary.webp',
    dark: '/brand/mark-dark.webp',
  },
  about: {
    body: 'Spawntech specializes in agile software development with a robust UX focus, leveraging reusable Node.js libraries to deliver custom, efficient solutions. We champion innovation and a seamless user experience, ensuring our clients stay ahead in the digital race.',
  },
  contact: {
    website: 'www.spawntech.io', // Placeholder, adjust as necessary
    mail: 'hello@spawntech.io', // Placeholder, adjust as necessary
    phone: '+27 11 994 9960', // Placeholder, adjust as necessary
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/spawntech-io',
    // youtube: 'https://www.youtube.com',
    // facebook: 'https://www.facebook.com',
  },
  legal: {
    companyName: 'Spawntech',
    copyrightYear: '2024',
  },
};

export const primaryNav: INavItem[] = [
  { label: 'Docs', href: '/docs' },
  { label: 'Services', href: '/services' },
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        description: 'ipsum lorem and that sh*t',
        href: '/blog',
      },
      {
        label: 'Case Studies',
        description: 'ipsum lorem and that sh*t',
        href: '/case-studies',
      },
      {
        label: 'White Papers',
        description: 'ipsum lorem and that sh*t',
        href: '/white-papers',
      },
    ],
  },
  { label: 'About', href: '/about' },
];
