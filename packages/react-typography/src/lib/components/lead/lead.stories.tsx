import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Lead, ILeadProps } from './lead';

export default {
  title: 'typography/lead',
  component: Lead,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Lead>;

type Story = StoryObj<ILeadProps>;

/**
 * Default Lead story
 */
export const Default: Story = {
  render: (args) => <Lead {...args}>Introductory Text</Lead>,
};
Default.storyName = 'Default';
