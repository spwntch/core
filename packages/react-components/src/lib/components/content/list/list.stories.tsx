import { Meta, StoryObj } from '@storybook/react';
import { Rocket, Star } from 'lucide-react';
import { List } from './list';
import { playAccessibilityTest, playBasic } from './list.specs';

const componentDescription = `
### Overview
The \`List\` component displays a list of bullets, which can include icons, images, or emojis. If no icon, image, or emoji is provided, the bullet will be a simple dot.

### Props
- \`bullets\`: An array of bullet objects to display. Each bullet can include an icon, image, emoji, title, body, and optional className.
- \`className\`: Optional additional class names to apply.

### Example
\`\`\`
<List
  bullets={[
    { icon: <Rocket className='h-5 w-5'/>, body: 'Rocket to the moon' },
    { icon: <Star className='h-5 w-5' />, body: 'Reach for the stars' },
  ]}
/>
\`\`\`

### Notes
Use this component to display a list of bulleted / numbered items with optional icons, images, or emojis.
`;

const meta: Meta<typeof List> = {
  title: 'components/content/list',
  component: List,
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
        { body: 'A first thought' },
        { body: 'A second' },
        { body: 'Yet another' },
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

type Story = StoryObj<typeof List>;

export const Basic: Story = {
  args: {
    bullets: [
      { body: 'A first thought' },
      { body: 'A second' },
      { body: 'Yet another' },
    ],
  },
  play: playBasic,
};

/**
 * Numbered Bullets example.
 * Demonstrates the Bullets component with numbered bullets.
 */
export const NumberedBullets: Story = {
  args: {
    bullets: [
      { body: 'First item' },
      { body: 'Second item' },
      { body: 'Third item' },
    ],
    numbered: true,
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
      {
        image: {
          src: 'https://avatar.iran.liara.run/public/boy',
          alt: 'Person 1 (he/him)',
          fallback: 'he/him',
        },
        body: 'Person 1 (he/him)',
      },
      {
        image: {
          src: 'https://avatar.iran.liara.run/public/girl',
          alt: 'Person 2 (she/her)',
          fallback: 'she/her',
        },
        body: 'Person 2 (she/her)',
      },
      {
        image: {
          src: 'https://avatar.iran.liara.run/public',
          alt: 'Person 3 (they/them)',
          fallback: 'they/them',
        },
        body: 'Person 3 (they/them)',
      },
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
      { icon: <Rocket className="h-5 w-5" />, body: 'Rocket to the moon' },
      { icon: <Star className="h-5 w-5" />, body: 'Reach for the stars' },
    ],
  },
  play: playBasic,
};

/**
 * Emoji Bullet example.
 * Demonstrates the Bullets component with emojis.
 */
export const EmojiBullets: Story = {
  args: {
    bullets: [
      { emoji: '🚀', body: 'Rocket to the moon' },
      { emoji: '⭐', body: 'Reach for the stars' },
    ],
  },
  play: playBasic,
};

/**
 * Large Emoji Bullet example.
 * Demonstrates the Bullets component with large emojis, titles, and bodies.
 */
export const LargeEmojiBullets: Story = {
  args: {
    bullets: [
      {
        emoji: '🌟',
        title: 'Star Title',
        body: 'This is the body of the star bullet',
      },
      {
        emoji: '🔥',
        title: 'Fire Title',
        body: 'This is the body of the fire bullet',
      },
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
      { emoji: '🚀', body: 'Accessible rocket' },
      { emoji: '⭐', body: 'Accessible star' },
    ],
  },
  play: playAccessibilityTest,
};
