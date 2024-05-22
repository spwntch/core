import { Meta, StoryObj } from '@storybook/react';
import { Code, ICodeProps } from './code';

const meta: Meta<typeof Code> = {
  title: 'typography/code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Code>;

/**
 * Basic code story
 */
export const Basic: Story = (args: ICodeProps) => (
  <Code {...args}>Inline Code</Code>
);
Basic.storyName = 'Basic';
