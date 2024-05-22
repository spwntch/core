import { Meta, StoryObj } from '@storybook/react';
import { H3, IH3Props } from './h3';

const meta: Meta<typeof H3> = {
  title: 'typography/h3',
  component: H3,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<IH3Props>;

/**
 * Basic H3 story
 */
export const Basic: Story = {
  render: (args) => <H3 {...args}>Sub-section Heading</H3>,
};
Basic.storyName = 'Basic';
