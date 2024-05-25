import { Meta, StoryObj } from '@storybook/react';
import { H2, IH2Props } from './h2';

const meta: Meta<typeof H2> = {
  title: 'typography/h2',
  component: H2,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<IH2Props>;

/**
 * Basic H2 story
 */
export const Basic: Story = {
  render: (args) => <H2 {...args}>Section Heading</H2>,
};
Basic.storyName = 'Basic';
