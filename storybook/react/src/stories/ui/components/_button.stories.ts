import { Button } from '@/react-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Click Me',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const basic: Story = {};
