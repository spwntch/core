import { BasicHeader } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullWidth } from '../../../lib/decorators';

const meta: Meta<typeof BasicHeader> = {
  component: BasicHeader,
  decorators: [withFullWidth],

  args: {
    header: {
      heading: 'Blog',
      subHeading: 'The latest from our team',
      body: [
        `We're always learning and growing. Here's what we've been up to lately.`,
      ],
    },
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BasicHeader>;

export const basicHeader: Story = {};
