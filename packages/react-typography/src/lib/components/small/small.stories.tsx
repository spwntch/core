import { Meta, StoryObj } from '@storybook/react';
import { ISmallProps, Small } from './small';

export default {
  title: 'typography/small',
  component: Small,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Small>;

type Story = StoryObj<ISmallProps>;

/**
 * Default Small story
 */
export const Default: Story = {
  render: (args) => <Small {...args}>This is small text.</Small>,
};
Default.storyName = 'Default';
