import { IBrand } from '../../components/brand/brand-provider/brand-provider';

export const brand: IBrand = {
  logoUrl: {
    light: '/brand/logo-primary.webp',
    dark: '/brand/logo-dark.webp',
  },
  markUrl: {
    light: '/brand/mark-primary.webp',
    dark: '/brand/mark-dark.webp',
  },
  tagline: '{ experience in code }',
  about: {
    body: [
      'Spawntech specializes in agile software development with a robust UX focus, leveraging reusable Node.js libraries to deliver custom, efficient solutions. We champion innovation and a seamless user experience, ensuring our clients stay ahead in the digital race.',
    ],
  },
  contact: {
    website: 'www.spawntech.io',
    mail: 'hello@spawntech.io',
    phone: '+27 11 994 9960',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/spawntech-io',
    youtube: '', // Example URL
    facebook: '',
    instagram: '',
  },
  legal: {
    companyName: 'Spawntech',
    copyrightYear: '2024',
  },
};
