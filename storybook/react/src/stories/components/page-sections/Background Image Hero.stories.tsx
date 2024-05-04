import { BackgroundImageHero } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

const meta: Meta<typeof BackgroundImageHero> = {
  component: BackgroundImageHero,
  decorators: [withFullPage],

  args: {
    image: { src: 'images/guy-sitting-at-tech-control-station.webp' },
    hero: {
      heading: 'Blog',
      subHeading: 'The latest from our team',
      body: `We're always learning and growing. Here's what we've been up to lately.`,
    },
  },
};
export default meta;
type Story = StoryObj<typeof BackgroundImageHero>;

export const backgroundImageHero: Story = {};
