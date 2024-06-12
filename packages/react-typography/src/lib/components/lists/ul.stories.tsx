import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Ul, IUlProps } from './ul';

export default {
  title: 'typography/lists/ul',
  component: Ul,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Ul>;

type Story = StoryObj<IUlProps>;

/**
 * Default Ul story
 */
export const Default: Story = {
  render: (args) => (
    <Ul {...args}>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </Ul>
  ),
};
Default.storyName = 'Default';
