
import { Meta, StoryObj } from '@storybook/react';
import { Blockquote, IBlockquoteProps } from './blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'typography/blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<IBlockquoteProps>;

/**
 * Basic Blockquote story
 */
export const Default: Story = {
  render: (args) => (
    <Blockquote {...args}>
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle." - Steve Jobs
    </Blockquote>
  ),
};
Default.storyName = 'Default';
