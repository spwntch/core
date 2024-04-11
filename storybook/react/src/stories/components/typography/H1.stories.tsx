import { H1 } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof H1> = {
  component: H1,
  args: {
    children: 'I am a Heading 1',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof H1>;

export const h1: Story = {};
