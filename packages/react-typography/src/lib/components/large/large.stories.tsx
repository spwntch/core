import { Meta, StoryObj } from '@storybook/react';
import { Large } from './large';

const meta: Meta<typeof Large> = {
  title: 'typography/large',
  component: Large,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
} as Meta<typeof Large>;

export default meta;

type Story = StoryObj<typeof Large>;

/**
 * Default Large story
 */
export const Default: Story = {
  render: (args) => <Large {...args}>Prominent Text</Large>,
};
Default.storyName = 'Default';
