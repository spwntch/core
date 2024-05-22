import { Meta, StoryObj } from '@storybook/react';
import { ILiProps, Li } from './li';

export default {
  title: 'typography/lists/li',
  component: Li,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Li>;

type Story = StoryObj<ILiProps>;

/**
 * Default Li story
 */
export const Default: Story = {
  render: (args) => <Li {...args}>List Item</Li>,
};
Default.storyName = 'Default';
