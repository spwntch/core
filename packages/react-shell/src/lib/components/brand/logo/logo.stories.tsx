import { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../../utils/storybook-decorators';
import { Logo } from './logo';
import { playBasic, playDarkMode } from './logo.specs';

const componentDescription = `
### Overview
The \`Logo\` component displays the brand's logo with support for light and dark modes.
It fetches the logo URLs from the brand context and renders the appropriate image based on the theme.

### Props
- \`className\`: Additional class name(s) for the container (string).
- \`altText\`: Alt text for the logo image (string). Default is 'Logo'.
- \`width\`: The width of the logo image in pixels (number). Default is 240.
- \`height\`: The height of the logo image in pixels (number). Default is 40. If not provided, it will be calculated based on the width.
- \`onClick\`: Optional click handler for the logo (function).

### Example
\`\`\`
<Logo className="custom-class" altText="My Logo" width={200} height={50} onClick={handleClick} />
\`\`\`

### Notes
This component uses the \`useBrand\` hook to access the brand's logo URLs.
Ensure that the brand provider is correctly set up in the application.
`;

const meta: Meta<typeof Logo> = {
  title: 'shell/brand/logo',
  component: Logo,
  tags: ['autodocs'],
  decorators: [withShellProvider],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    altText: {
      description: 'Alt text for the logo image. Defaults to "Logo".',
      control: 'text',
    },
    width: {
      description: 'The width of the logo image in pixels. Defaults to 240.',
      control: 'number',
    },
    height: {
      description: 'The height of the logo image in pixels. Defaults to 40. If not provided, it will be calculated based on the width.',
      control: 'number',
    },
    onClick: {
      description: 'Optional click handler for the logo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

/**
 * ### Basic Logo
 * Demonstrates a basic usage of the \`Logo\` component with default settings.
 */
export const Basic: Story = {
  args: {
    altText: 'Brand Logo',
    width: 240,
    height: 40,
  },
  play: playBasic,
};

/**
 * ### Dark Mode
 * Demonstrates the \`Logo\` component in dark mode.
 */
export const DarkMode: Story = {
  args: {
    altText: 'Brand Logo',
    width: 240,
    height: 40,
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
  play: playDarkMode,
};