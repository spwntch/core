import { Badge } from './badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Components/Badge',
  component: Badge,
  args: {
    children: 'user experience',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const basic: Story = {};
