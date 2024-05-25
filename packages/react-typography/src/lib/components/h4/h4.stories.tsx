import { Meta, StoryObj } from '@storybook/react';
import { H4, IH4Props } from './h4';

const meta: Meta<typeof H4> = {
  title: 'typography/h4',
  component: H4,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<IH4Props>;

/**
 * Basic H4 story
 */
export const Basic: Story = {
  render: (args) => <H4 {...args}>Sub Section Category Heading</H4>,
};
Basic.storyName = 'Basic';
