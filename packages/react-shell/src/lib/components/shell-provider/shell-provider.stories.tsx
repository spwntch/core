import { Logo } from '../brand';
import { ShellProvider } from './shell-provider';
import type { Meta, StoryObj } from '@storybook/react';

/**
 *
 * The `ShellProvider` brings together many of our other providers in one convenient interface, including:
 * - The `BrandProvider` for brand assets
 * - The `NavProvider` for app navigation
 *
 * ## How to Use
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
 *    };
 *    const primaryNav: INavItem[] = [
 *      { label: 'Docs', href: '/docs' },
 *      { label: 'Resources', href: '/resources' },
 *    ];
 *
 *    return (
 *      <html lang="en">
 *        <body>
 *          <ShellProvider brand={brand} navItems={primaryNav}>
 *            {children}
 *          </ShellProvider>
 *        </body>
 *      </html>
 *    );
 *  }
 *
 *  ```
 */
const meta: Meta<typeof ShellProvider> = {
  title: 'shell/shell-provider',

  tags: ['autodocs'],
  component: ShellProvider,
  args: {
    brand: {
      logoUrl: {
        light: '/brand/logo-primary.webp',
        dark: '/brand/logo-dark.webp',
      },
      markUrl: {
        light: '/brand/mark-primary.webp',
        dark: '/brand/mark-dark.webp',
      },
      markText: 'spawntech',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ShellProvider>;

export const Primary: Story = {
  name: 'ShellProvider with Logo in light mode',
  args: {
    children: <Logo />,
  },
};

export const InDarkMode: Story = {
  name: 'ShellProvider with Mark in dark mode.',
  args: {
    children: <Logo variant="mark" />,
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
