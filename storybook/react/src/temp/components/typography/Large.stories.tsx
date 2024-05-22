import { Large } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Large> = {
  component: Large,
  args: {
    children: 'I am Large Text',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Large>;

export const large: Story = {};
