import type { Meta, StoryObj } from '@storybook/react';
import { BrandProvider } from './brand-provider';
import { Logo } from '../logo/logo';
import { brand } from '../../../storybook/storybook-config';

/**
 *
 * The `BrandProvider` was designed to streamline the accessibility and implementation of brand assets across your Next.js applications.
 *
 * This includes logos, brand names, colors, fonts, and more. By encapsulating these assets within the `BrandProvider`, we ensure consistent brand representation and ease of styling across your digital products.
 *
 *
 * ## How to Use
 *
 *
 * To use `BrandProvider`, simply pass a brand configuration to the provider. Then, anything that's wrapped inside will have access to the brand context. We recommend placing the ~BrandProvider` within your root layout.
 * 
 * 
 *  ```tsx
 *  export default function RootLayout({
 *    children,
 *  }: {
 *    children: React.ReactNode;
 *  }) {
 *    const brand: IBrand = {
 *      logoUrl:{light: '/brand/logo-primary.webp', dark: '/brand/logo-dark.webp'} }},
 *      markUrl:{light: '/brand/mark-primary.webp', dark: '/brand/mark-dark.webp'} }},
 *      about: {
 *        body: 'Spawntech specializes in agile software development with a robust UX focus, leveraging reusable Node.js libraries to deliver custom, efficient solutions. We champion innovation and a seamless user experience, ensuring our clients stay ahead in the digital race.',
 *      },
 *      contact: {
 *        website: 'www.spawntech.io', 
 *        mail: 'hello@spawntech.io', 
 *        phone: '+27 11 994 9960', 
 *      },
 *      social: {
 *        linkedin: 'https://www.linkedin.com/company/spawntech-io',
 *      },
 *      legal: {
 *        companyName: 'Spawntech',
 *        copyrightYear: '2024',
 *      },
 *    };
 *
 *    return (
 *      <html lang="en">
 *        <body>
 *          <BrandProvider brand={brand}>
 *            {children}
 *          </BrandProvider>
 *        </body>
 *      </html>
 *    );
 *  }
 *
 *  ```
 
 *
 * > PRO TIP: Rather use our `ShellProvider`. If you do, the `BrandProvider` is already included.
 
 */
const meta: Meta<typeof BrandProvider> = {
  title: 'shell/brand/brand-provider',
  // parameters: { docs: { page: BasicDocs } },
  tags: ['autodocs'],
  component: BrandProvider,
  args: {
    brand,
    children: <Logo />,
  },
};
export default meta;

type Story = StoryObj<typeof BrandProvider>;

export const Primary: Story = {};

export const InDarkMode: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
