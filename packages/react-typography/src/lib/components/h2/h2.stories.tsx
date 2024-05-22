import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H2, IH2Props } from './h2';

export default {
  title: 'typography/h2',
  component: H2,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof H2>;

type Story = StoryObj<IH2Props>;

/**
 * Default H2 story
 */
export const Default: Story = {
  render: (args) => <H2 {...args}>Section Heading</H2>,
};
Default.storyName = 'Default';
