import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H4, IH4Props } from './h4';

export default {
  title: 'typography/h4',
  component: H4,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof H4>;

type Story = StoryObj<IH4Props>;

/**
 * Default H4 story
 */
export const Default: Story = {
  render: (args) => <H4 {...args}>Subsection Heading</H4>,
};
Default.storyName = 'Default';
