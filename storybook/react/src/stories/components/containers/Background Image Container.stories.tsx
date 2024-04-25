import { BackgroundImageContainer } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackgroundImageContainer> = {
  component: BackgroundImageContainer,
  args: {
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BackgroundImageContainer>;

export const backgroundImageContainer: Story = {};
