import { Code } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Code> = {
  component: Code,
  args: {
    children: 'I am a code block',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Code>;

export const code: Story = {};
