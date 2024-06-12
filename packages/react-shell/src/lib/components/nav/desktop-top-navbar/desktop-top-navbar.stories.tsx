import type { Meta, StoryObj } from '@storybook/react';
import { withBrandProvider, withFullWidth, withNavProvider } from '../../../storybook/storybook-decorators';
import { DesktopTopNavbar } from './desktop-top-navbar';
import { playBasic } from './desktop-top-navbar.specs';

/**
 * The `DesktopTopNavbar` component provides a navigation bar for desktop devices.
 *
 * ## How to Use
 *
 * Wrap the `DesktopTopNavbar` component within your application. Ensure the `NavProvider` and `BrandProvider` are properly configured.
 *
 * ```tsx
 * import { DesktopTopNavbar } from './desktop-top-navbar';
 *
 * export default function App() {
 *   const handleLinkTo = (href: string) => {
 *     console.log(`Navigating to ${href}`);
 *   };
 *
 *   return (
 *     <DesktopTopNavbar onLinkTo={handleLinkTo} githubUrl="https://github.com" />
 *   );
 * }
 * ```
 */
const meta: Meta<typeof DesktopTopNavbar> = {
  title: 'shell/nav/desktop-top-navbar',
  component: DesktopTopNavbar,
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
    logoHeight: {
      description: 'Height of the logo',
      control: 'number',
    },
    navAlignment: {
      description: 'Alignment of the navigation items',
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    disableThemeToggle: {
      description: 'Disables the theme toggle button',
      control: 'boolean',
    },
    githubUrl: {
      description: 'URL for the GitHub button',
      control: 'text',
    },
    classNames: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DesktopTopNavbar>;

/**
 * Basic DesktopTopNavbar example.
 * Demonstrates the DesktopTopNavbar component.
 */
export const Basic: Story = {
  args: {
    logoHeight: 36,
    navAlignment: 'center',
    disableThemeToggle: false,
    githubUrl: 'https://github.com',
    onLinkTo: (href: string) => alert(`Navigating to ${href}`),
  },
  play: playBasic,
};
