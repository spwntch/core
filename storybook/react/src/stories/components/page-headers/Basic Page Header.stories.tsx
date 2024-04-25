import { BasicPageHeader } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BasicPageHeader> = {
  component: BasicPageHeader,
  args: {
    content: {
      heading: 'Blog',
      subHeading: 'The latest from our team',
      body: `We're always learning and growing. Here's what we've been up to lately.`,
    },
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BasicPageHeader>;

export const basicPageHeader: Story = {};
