import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H1, IH1Props } from './h1';

export default {
  title: 'typography/h1',
  component: H1,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof H1>;

type Story = StoryObj<IH1Props>;

/**
 * Default H1 story
 */
export const Default: Story = {
  render: (args) => <H1 {...args}>Main Heading</H1>,
};
Default.storyName = 'Default';
