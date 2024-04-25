import { BackgroundImageContainer } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

const meta: Meta<typeof BackgroundImageContainer> = {
  component: BackgroundImageContainer,
  decorators: [withFullPage],
  args: {},
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BackgroundImageContainer>;

export const backgroundImageContainer: Story = {};
