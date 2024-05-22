import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Code, ICodeProps } from './code';

export default {
  title: 'typography/code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta;

type Story = StoryObj<typeof Code>;

/**
 * Default code story
 */
export const Default: Story = (args: ICodeProps) => (
  <Code {...args}>Inline Code</Code>
);
Default.storyName = 'Default';
