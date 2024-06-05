import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Social } from './social';
import {
  withBrandProvider,
  withFullWidth,
} from '../../../../utils/storybook-decorators';
import { playBasic, playAccessibilityTest } from './social.specs';

const componentDescription = `
### Overview
The \`Social\` component displays the social media links of the brand.

### Props
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<Social />
\`\`\`

### Notes
This component uses the \`H3\` component from \`@/react-typography\` and icons from \`lucide-react\`.
`;

const meta: Meta<typeof Social> = {
  title: 'shell/footer/sections/social',
  component: Social,
  tags: ['autodocs'],
  decorators: [withBrandProvider, withFullWidth],
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
      description: 'Additional class name(s) for the component',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Social>;

/**
 * Basic Social example.
 * Demonstrates a basic usage of the Social component.
 */
export const Basic: Story = {
  args: {
    className: 'max-w-2xl mx-auto',
  },
  play: playBasic,
};

/**
 * Accessibility Test Social example.
 * Demonstrates the Social component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    className: 'max-w-2xl mx-auto',
  },
  play: playAccessibilityTest,
};
