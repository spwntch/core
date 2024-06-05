import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavProvider } from './nav-provider';
import { NavToolbar } from '../nav-toolbar/nav-toolbar';
import { primaryNav } from '../../../storybook/storybook-config';

/**
 *
 * The `NavProvider` is designed to streamline the accessibility and implementation of navigation items across your Next.js applications.
 *
 * This includes navigation links and menus. By encapsulating these items within the `NavProvider`, we ensure consistent navigation structure and ease of navigation management across your digital products.
 *
 * ## How to Use
 *
 * To use `NavProvider`, simply pass a navigation configuration to the provider. Then, anything that's wrapped inside will have access to the navigation context. We recommend placing the `NavProvider` within your root layout.
 * 
 * ```tsx
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   const navItems: INavItem[] = [
 *     { label: 'Home', href: '/' },
 *     { label: 'About', href: '/about' },
 *     {
 *       label: 'Services',
 *       children: [
 *         { label: 'Consulting', href: '/services/consulting' },
 *         { label: 'Development', href: '/services/development' },
 *       ],
 *     },
 *   ];
 *
 *   return (
 *     <html lang="en">
 *       <body>
 *         <NavProvider navItems={navItems}>
 *           {children}
 *         </NavProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 *
 * > PRO TIP: Rather use our `ShellProvider`. If you do, the `NavProvider` is already included.
 *
 */
const meta: Meta<typeof NavProvider> = {
  title: 'shell/nav/nav-provider',
  tags: ['autodocs'],
  component: NavProvider,
  args: {
    navItems: primaryNav,
    children: <NavToolbar onLinkTo={(href) => alert(`Navigating to ${href}`)} />,
  },
};
export default meta;

type Story = StoryObj<typeof NavProvider>;

export const Primary: Story = {};

export const InDarkMode: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
