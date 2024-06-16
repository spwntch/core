import { Meta, StoryObj } from '@storybook/react';
import {
  withBrandProvider,
  withFullWidth,
} from '../../../../storybook/storybook-decorators';
import { About } from './about';
import { playAccessibilityTest, playBasic } from './about.specs';

const componentDescription = `
### Overview
The \`About\` component displays information about the brand.

### Props
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<About />
\`\`\`

### Notes
This component uses the \`H3\` and \`Small\` components from \`@spwntch/typography\`.
`;

const meta: Meta<typeof About> = {
  title: 'shell/footer/sections/about',
  component: About,
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

type Story = StoryObj<typeof About>;

/**
 * Basic About example.
 * Demonstrates a basic usage of the About component.
 */
export const Basic: Story = {
  args: {
    className: 'max-w-md mx-auto',
  },
  play: playBasic,
};

/**
 * Accessibility Test About example.
 * Demonstrates the About component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    className: 'max-w-md mx-auto',
  },
  play: playAccessibilityTest,
};
