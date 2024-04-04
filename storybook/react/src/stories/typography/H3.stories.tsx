import { H3 } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof H3> = {
  component: H3,
  args: {
    children: 'I am a Heading 3',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof H3>;

export const h3: Story = {};
