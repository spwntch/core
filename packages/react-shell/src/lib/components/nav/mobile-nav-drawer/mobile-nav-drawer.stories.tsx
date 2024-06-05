import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileNavDrawer } from './mobile-nav-drawer';
import { withFullWidth, withNavProvider, withBrandProvider } from '../../../storybook/storybook-decorators';
import { playBasic } from './mobile-nav-drawer.specs';

/**
 * The `MobileNavDrawer` component provides a navigation drawer for mobile devices.
 *
 * ## How to Use
 *
 * Wrap the `MobileNavDrawer` component within your application. Ensure the `NavProvider` and `BrandProvider` are properly configured.
 *
 * ```tsx
 * import { MobileNavDrawer } from './mobile-nav-drawer';
 *
 * export default function App() {
 *   const handleLinkTo = (href: string) => {
 *     console.log(`Navigating to ${href}`);
 *   };
 *
 *   return (
 *     <MobileNavDrawer onLinkTo={handleLinkTo} />
 *   );
 * }
 * ```
 */
const meta: Meta<typeof MobileNavDrawer> = {
  title: 'shell/nav/mobile-nav-drawer',
  component: MobileNavDrawer,
  decorators: [withFullWidth, withNavProvider, withBrandProvider],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onLinkTo: {
      description: 'Function to handle link selection',
      action: 'onLinkTo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MobileNavDrawer>;

/**
 * Basic MobileNavDrawer example.
 * Demonstrates the MobileNavDrawer component.
 */
export const Basic: Story = {
  args: {
    onLinkTo: (href: string) => alert(`Navigating to ${href}`),
  },
  play: playBasic,
};
