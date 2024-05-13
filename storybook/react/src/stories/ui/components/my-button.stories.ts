import { MyButton } from '@/react-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  args: {
    children: 'Click Me',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MyButton>;

export const basic: Story = {};
