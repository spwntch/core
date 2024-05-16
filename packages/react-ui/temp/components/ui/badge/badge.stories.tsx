import { Badge } from './badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  args: {
    children: 'user experience',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const badge: Story = {};
