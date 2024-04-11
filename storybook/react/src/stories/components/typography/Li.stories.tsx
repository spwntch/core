import { Li } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Li> = {
  component: Li,
  args: {
    children: 'I am a list item',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Li>;

export const li: Story = {};
