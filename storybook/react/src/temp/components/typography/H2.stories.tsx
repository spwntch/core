import { H2 } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof H2> = {
  component: H2,
  args: {
    children: 'I am a Heading 2',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof H2>;

export const h2: Story = {};
