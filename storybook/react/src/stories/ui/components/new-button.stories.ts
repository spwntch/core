import { NewButton } from '@/react-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NewButton> = {
  component: NewButton,
  args: {
    children: 'Click Me',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NewButton>;

export const basic: Story = {};
