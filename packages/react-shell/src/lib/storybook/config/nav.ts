import { INavItem } from '../../providers/nav-provider';

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
