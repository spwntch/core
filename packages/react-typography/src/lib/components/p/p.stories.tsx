import { Meta, StoryObj } from '@storybook/react';
import { IPProps, P } from './p';

export default {
  title: 'typography/p',
  component: P,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof P>;

type Story = StoryObj<IPProps>;

/**
 * Default P story
 */
export const Default: Story = {
  render: (args) => <P {...args}>This is a paragraph of text.</P>,
};
Default.storyName = 'Default';
