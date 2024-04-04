import { Ul } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Ul> = {
  component: Ul,
  args: {
    children: 'I am Ul text',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Ul>;

export const ul: Story = {};
