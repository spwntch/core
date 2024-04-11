import { Lead } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Lead> = {
  component: Lead,
  args: {
    children: 'I am Lead Text',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Lead>;

export const lead: Story = {};
