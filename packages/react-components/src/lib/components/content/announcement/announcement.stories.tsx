import { Meta, StoryObj } from '@storybook/react';
import { Announcement } from './announcement';
import { playBasic, playAccessibilityTest } from './announcement.specs';

const componentDescription = `
### Overview
The \`Announcement\` component displays an announcement message with a link.

### Props
- \`message\`: The announcement message to display.
- \`href\`: The URL for the announcement link.
- \`className\`: Optional additional class names to apply.

### Example
\`\`\`
<Announcement message="This is an announcement" href="#" />
\`\`\`

### Notes
Use this component to show important announcements to users.
`;

const meta: Meta<typeof Announcement> = {
  title: 'components/content/announcement',
  component: Announcement,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    message: {
      description: 'The announcement message to display',
      type: 'string',
      defaultValue: 'This is an announcement',
    },
    href: {
      description: 'The URL for the announcement link',
      type: 'string',
      defaultValue: '#',
    },
    className: {
      description: 'Optional additional class names to apply',
      type: 'string',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Announcement>;

export const Basic: Story = {
  args: {
    message: 'This is an announcement',
    href: '#',
  },
  play: playBasic,
};

/**
 * Long Announcement example.
 * Demonstrates the Announcement component with a long announcement message.
 */
export const LongAnnouncement: Story = {
    args: {
      message: 'This is a very long announcement message that should demonstrate how the Announcement component handles longer text content. It should wrap appropriately and still look good on different screen sizes.',
      href: '#',
    },
    play: playBasic,
  };
  

/**
 * Accessibility check for the Announcement component.
 */
export const Accessible: Story = {
  args: {
    message: 'This is an accessible announcement',
    href: '#',
  },
  play: playAccessibilityTest,
};
