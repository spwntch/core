import { Meta, StoryObj } from '@storybook/react';
import { H1, IH1Props } from './h1';

const meta: Meta<typeof H1> = {
  title: 'typography/h1',
  component: H1,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<IH1Props>;

/**
 * Basic H1 story
 */
export const Basic: Story = {
  render: (args) => <H1 {...args}>Main Heading</H1>,
};
Basic.storyName = 'Basic';
