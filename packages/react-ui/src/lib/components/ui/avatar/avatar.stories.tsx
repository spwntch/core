import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { playBasic, playAccessibilityTest } from './avatar.specs';

const componentDescription = `
### Overview
The \`Avatar\` component displays a user's profile image with optional fallback content when the image is unavailable.

### Props
- \`className\`: Optional additional class names to apply.

### Example
\`\`\`
<Avatar>
  <AvatarImage src="https://example.com/image.jpg" alt="User" />
  <AvatarFallback>U</AvatarFallback>
</Avatar>
\`\`\`

### Notes
Use this component to display user profile images with fallback content.
`;

const meta: Meta<typeof Avatar> = {
  title: 'ui/avatar',
  component: Avatar,
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
    className: {
      description: 'Optional additional class names to apply',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
    render: () => (
      <Avatar>
        <AvatarImage src="https://avatar.iran.liara.run/public" alt="User 1" />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
    ),
    play: playBasic,
  };
  
  export const Accessible: Story = {
    render: () => (
      <Avatar>
        <AvatarImage src="https://avatar.iran.liara.run/public" alt="User 2" />
        <AvatarFallback>GG</AvatarFallback>
      </Avatar>
    ),
    play: playAccessibilityTest,
  };
  