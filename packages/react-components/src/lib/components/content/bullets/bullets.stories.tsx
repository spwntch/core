import { Meta, StoryObj } from '@storybook/react';
import { Bullets } from './bullets';
import { Avatar } from '@/react-ui';
import { LucideIcon, Moon, Sun } from 'lucide-react';
import { playBasic, playAccessibilityTest } from './bullets.specs';

const componentDescription = `
### Overview
The \`Bullets\` component displays a list of bullets, which can include icons, emojis, or images.

### Props
- \`bullets\`: An array of bullet objects to display. Each bullet can include an icon, text, and optional className.
- \`className\`: Optional additional class names to apply.

### Example
\`\`\`
<Bullets
  bullets={[
    { icon: <Emoji symbol="🚀" />, text: 'Rocket to the moon' },
    { icon: <LucideIcon name="star" />, text: 'Reach for the stars' },
  ]}
/>
\`\`\`

### Notes
Use this component to display a list of items with optional icons, emojis, or images.
`;

const meta: Meta<typeof Bullets> = {
  title: 'components/content/bullets',
  component: Bullets,
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
    bullets: {
      description: 'An array of bullet objects to display',
      control: { type: 'object' },
      defaultValue: [
        { icon: '🚀', text: 'Rocket to the moon' },
        { icon: '⭐', text: 'Reach for the stars' },
      ],
    },
    className: {
      description: 'Optional additional class names to apply',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Bullets>;

export const Basic: Story = {
  args: {
    bullets: [
      { icon: '🚀', text: 'Rocket to the moon' },
      { icon: '⭐', text: 'Reach for the stars' },
    ],
  },
  play: playBasic,
};

/**
 * Avatar Bullet example.
 * Demonstrates the Bullets component with Avatar images as icons.
 */
export const AvatarBullets: Story = {
  args: {
    bullets: [
      { icon: <Avatar src="/path/to/avatar1.jpg" />, text: 'User 1' },
      { icon: <Avatar src="/path/to/avatar2.jpg" />, text: 'User 2' },
    ],
  },
  play: playBasic,
};

/**
 * Icon Bullet example.
 * Demonstrates the Bullets component with Lucide icons.
 */
export const IconBullets: Story = {
  args: {
    bullets: [
      { icon: <Moon name="rocket" />, text: 'Rocket to the moon' },
      { icon: <Sun name="star" />, text: 'Reach for the stars' },
    ],
  },
  play: playBasic,
};

/**
 * Accessibility check for the Bullets component.
 */
export const Accessible: Story = {
  args: {
    bullets: [
      { icon: '🚀', text: 'Accessible rocket' },
      { icon: '⭐', text: 'Accessible star' },
    ],
  },
  play: playAccessibilityTest,
};
