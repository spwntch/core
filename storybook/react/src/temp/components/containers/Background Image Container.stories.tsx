import { BackgroundImageContainer } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

/**
 * A simple div that you can pass a `src` prop to get a bkacground image displayed.
 */
const meta: Meta<typeof BackgroundImageContainer> = {
  component: BackgroundImageContainer,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullPage],
  tags: ['autodocs'],
  args: {},
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BackgroundImageContainer>;

export const standard: Story = {};
