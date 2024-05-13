import { BasicHero } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

const meta: Meta<typeof BasicHero> = {
  component: BasicHero,
  decorators: [withFullPage],

  args: {
    hero: {
      heading: 'Blog',
      subHeading: 'The latest from our team',
      body: [
        `We're always learning and growing. Here's what we've been up to lately.`,
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof BasicHero>;

export const basicHero: Story = {};
