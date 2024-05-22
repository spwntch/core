import { Meta, StoryObj } from '@storybook/react';
import { IMutedProps, Muted } from './muted';

export default {
  title: 'typography/muted',
  component: Muted,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Muted>;

type Story = StoryObj<IMutedProps>;

/**
 * Default Muted story
 */
export const Default: Story = {
  render: (args) => <Muted {...args}>This is muted text.</Muted>,
};
Default.storyName = 'Default';
