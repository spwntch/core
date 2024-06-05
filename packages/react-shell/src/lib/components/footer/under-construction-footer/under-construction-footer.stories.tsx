import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UnderConstructionFooter } from './under-construction-footer';
import { withFullWidth, withBrandProvider } from '../../../utils/storybook-decorators';
import { playBasic, playDarkMode } from './under-construction-footer.specs';

const componentDescription = `
### Overview
The \`UnderConstructionFooter\` component displays the footer section with about, contact, and social links, as well as an "Under Construction" notice.

### Props
- \`className\`: Additional class name(s) for the component.
- \`poweredBySrcLight\`: The source URL for the light mode "Powered by Spawntech" image.
- \`poweredBySrcDark\`: The source URL for the dark mode "Powered by Spawntech" image.

### Example
\`\`\`
<UnderConstructionFooter
  poweredBySrcLight="/under-construction/powered-by-spawntech-primary.webp"
  poweredBySrcDark="/under-construction/powered-by-spawntech-dark.webp"
/>
\`\`\`

### Notes
This component uses the \`About\`, \`Contact\`, \`Social\`, and \`Legal\` components.
`;

const meta: Meta<typeof UnderConstructionFooter> = {
  title: 'shell/under-construction-footer',
  component: UnderConstructionFooter,
  tags: ['autodocs'],
  decorators: [withFullWidth, withBrandProvider],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
    poweredBySrcLight: {
      description: 'The source URL for the light mode "Powered by Spawntech" image',
      control: 'text',
    },
    poweredBySrcDark: {
      description: 'The source URL for the dark mode "Powered by Spawntech" image',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UnderConstructionFooter>;

/**
 * Under Construction Footer example.
 * Demonstrates the UnderConstructionFooter component.
 */
export const Basic: Story = {
  args: {
    className: '',
    poweredBySrcLight: '/under-construction/powered-by-spawntech-primary.webp',
    poweredBySrcDark: '/under-construction/powered-by-spawntech-dark.webp',
  },
  play: playBasic,
};

/**
 * Dark Mode Under Construction Footer example.
 * Demonstrates the UnderConstructionFooter component in dark mode.
 */
export const DarkMode: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
  args: {
    className: 'bg-gray-900 text-white',
    poweredBySrcLight: '/under-construction/powered-by-spawntech-primary.webp',
    poweredBySrcDark: '/under-construction/powered-by-spawntech-dark.webp',
  },
  play: playDarkMode,
};
