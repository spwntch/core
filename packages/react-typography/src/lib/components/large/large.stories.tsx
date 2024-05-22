import { Meta, StoryObj } from '@storybook/react';
import { ILargeProps, Large } from './large';

export default {
  title: 'typography/large',
  component: Large,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Large>;

type Story = StoryObj<ILargeProps>;

/**
 * Default Large story
 */
export const Default: Story = {
  render: (args) => <Large {...args}>Prominent Text</Large>,
};
Default.storyName = 'Default';
