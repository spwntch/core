import { Meta, StoryObj } from '@storybook/react';
import { H3, IH3Props } from './h3';

export default {
  title: 'typography/h3',
  component: H3,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof H3>;

type Story = StoryObj<IH3Props>;

/**
 * Default H3 story
 */
export const Default: Story = {
  render: (args) => <H3 {...args}>Sub-section Heading</H3>,
};
Default.storyName = 'Default';
