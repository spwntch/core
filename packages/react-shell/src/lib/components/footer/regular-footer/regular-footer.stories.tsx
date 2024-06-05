import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RegularFooter } from './regular-footer';
import {
  withFullWidth,
  withBrandProvider,
} from '../../../storybook/storybook-decorators';
import { playBasic, playDarkMode } from './regular-footer.specs';

const componentDescription = `
### Overview
The \`RegularFooter\` component displays the footer section with about, contact, social links, and legal information.

### Props
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<RegularFooter />
\`\`\`

### Notes
This component uses the \`About\`, \`Contact\`, \`Social\`, and \`Legal\` components.
`;

const meta: Meta<typeof RegularFooter> = {
  title: 'shell/footer/regular-footer',
  component: RegularFooter,
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
  },
};

export default meta;

type Story = StoryObj<typeof RegularFooter>;

/**
 * Regular Footer example.
 * Demonstrates the RegularFooter component.
 */
export const Basic: Story = {
  args: {
    className: '',
  },
  play: playBasic,
};

/**
 * Dark Mode Regular Footer example.
 * Demonstrates the RegularFooter component in dark mode.
 */
export const DarkMode: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
  args: {
    className: 'bg-gray-900 text-white',
  },
  play: playDarkMode,
};
