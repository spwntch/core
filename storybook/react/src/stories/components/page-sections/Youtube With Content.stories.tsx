import { YoutubeWithContent } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

const meta: Meta<typeof YoutubeWithContent> = {
  component: YoutubeWithContent,
  decorators: [withFullPage],

  args: {
    youtube: {
      id: '1xgP-dR4dzI',
      placeholder: '/brand/youtube-placeholder.webp',
    },
    content: {
      heading: 'A Suitably Epic Heading',
      body: [
        'ipsum lorem dolor sit amet consectetur adipiscing elit. Nullam nec purus et libero.',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof YoutubeWithContent>;

export const youtubeWithContent: Story = {};
