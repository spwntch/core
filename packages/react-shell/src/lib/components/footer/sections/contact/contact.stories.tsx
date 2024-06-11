import { Meta, StoryObj } from '@storybook/react';
import {
  withBrandProvider,
  withFullWidth,
} from '../../../../storybook/storybook-decorators';
import { Contact } from './contact';
import { playAccessibilityTest, playBasic } from './contact.specs';

const componentDescription = `
### Overview
The \`Contact\` component displays the contact information of the brand.

### Props
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<Contact />
\`\`\`

### Notes
This component uses the \`H3\` component from \`@/react-typography\` and icons from \`lucide-react\`.
`;

const meta: Meta<typeof Contact> = {
  title: 'shell/footer/sections/contact',
  component: Contact,
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

type Story = StoryObj<typeof Contact>;

/**
 * Basic Contact example.
 * Demonstrates a basic usage of the Contact component.
 */
export const Basic: Story = {
  args: {
    className: 'max-w-md mx-auto',
  },
  play: playBasic,
};

/**
 * Accessibility Test Contact example.
 * Demonstrates the Contact component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    className: 'max-w-md mx-auto',
  },
  play: playAccessibilityTest,
};
