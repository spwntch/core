import { Meta, StoryObj } from '@storybook/react';
import { InlineCode, IInlineCodeProps } from './inline-code';

const meta: Meta<typeof InlineCode> = {
  title: 'typography/inline-code',
  component: InlineCode,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof InlineCode>;

/**
 * Basic code story
 */
export const Basic: Story = (args: IInlineCodeProps) => (
  <InlineCode {...args}>Inline Code</InlineCode>
);
Basic.storyName = 'Basic';
