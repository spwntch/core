import { Meta, StoryObj } from '@storybook/react';
import {
  withBrandProvider,
  withFullWidth
} from '../../../../storybook/storybook-decorators';
import { Legal } from './legal';
import { playAccessibilityTest, playBasic } from './legal.specs';

const componentDescription = `
### Overview
The \`Legal\` component displays legal information of the brand.

### Props
- \`override\`: Optional override data for the legal information.
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<Legal />
\`\`\`

### Notes
This component uses the \`P\` component from \`@/react-typography\`.
`;

const meta: Meta<typeof Legal> = {
  title: 'shell/footer/sections/legal',
  component: Legal,
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
    override: {
      description: 'Optional override data for the legal information',
      control: 'object',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Legal>;

/**
 * Basic Legal example.
 * Demonstrates a basic usage of the Legal component.
 */
export const Basic: Story = {
  args: {
    className: 'max-w-2xl mx-auto',
  },
  play: playBasic,
};

/**
 * Accessibility Test Legal example.
 * Demonstrates the Legal component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    className: 'max-w-2xl mx-auto',
  },
  play: playAccessibilityTest,
};
