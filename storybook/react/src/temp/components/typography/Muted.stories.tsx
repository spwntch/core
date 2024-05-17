import { Muted } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Muted> = {
  component: Muted,
  args: {
    children: 'I am muted text',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Muted>;

export const muted: Story = {};
