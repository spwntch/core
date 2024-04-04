import { Small } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Small> = {
  component: Small,
  args: {
    children: 'I am small text',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Small>;

export const small: Story = {};
