import { P } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof P> = {
  component: P,
  args: {
    children: 'I am P text',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof P>;

export const p: Story = {};
