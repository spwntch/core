import { H4 } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof H4> = {
  component: H4,
  args: {
    children: 'I am a Heading 4',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof H4>;

export const h4: Story = {};
