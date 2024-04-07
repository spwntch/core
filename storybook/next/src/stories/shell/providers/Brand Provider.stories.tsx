import { BrandProvider,  } from '@/next-shell';
import type { Meta, StoryObj } from '@storybook/react';

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
 * > PRO TIP: If you're a paying **spawntech** client, you're probably already using our `ShellProvider`. If so, there is no need to use `BrandProvider` independently as its already included.
 * >
 
 */
const meta: Meta<typeof BrandProvider> = {
  // parameters: { docs: { page: BasicDocs } },
  tags: ['autodocs'],
  component: BrandProvider,
  args: {
    // brand,
    // children: <Logo />,
  },
};
export default meta;

type Story = StoryObj<typeof BrandProvider>;

export const Primary: Story = {
  name: 'BrandProvider with Logo in light mode',
};

export const InDarkMode: Story = {
  name: 'BrandProvider with Mark in dark mode.',
  args: {
    // children: <Mark />,
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
