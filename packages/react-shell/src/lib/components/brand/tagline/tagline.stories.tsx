import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tagline } from './tagline';
import { withBrandProvider } from '../../../utils/storybook-decorators';
import { playBasic, playAccessibilityTest } from './tagline.specs';

const componentDescription = `
### Overview
The \`Tagline\` component displays the brand tagline.

### Props
- \`className\`: Additional class name(s) for the tagline container.
- \`children\`: The content to be displayed inside the component.

### Example
\`\`\`
<Tagline />
\`\`\`

### Notes
This component is designed to display the brand tagline.
`;

const meta: Meta<typeof Tagline> = {
  title: 'shell/brand/tagline',
  component: Tagline,
  tags: ['autodocs'],
  decorators: [withBrandProvider],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional class name(s) for the tagline container',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tagline>;

/**
 * Basic Tagline example.
 * Demonstrates a basic usage of the Tagline component.
 */
export const Basic: Story = {
  args: {
    className: '',
  },
  play: playBasic,
};

/**
 * Accessibility Test Tagline example.
 * Demonstrates the Tagline component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    className: '',
  },
  play: playAccessibilityTest,
};
