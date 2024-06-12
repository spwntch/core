import { Meta, StoryObj } from '@storybook/react';
import { Tags } from './tags';
import { playBasic, playManyTags } from './tags.specs';

const meta: Meta<typeof Tags> = {
  title: 'components/content/tags',
  component: Tags,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tags: {
      description: 'An array of tags to be displayed',
    },
    className: {
      description: 'Additional class name(s) for the tags container',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tags>;

/**
 * Default Tags example.
 * Demonstrates a basic usage of the Tags component.
 */
export const Default: Story = {
  args: {
    tags: ['Digital Experience', 'Customer Engagement', 'DX'],
  },
  play: playBasic,
};

/**
 * Many Tags example.
 * Demonstrates the Tags component with many tags.
 */
export const ManyTags: Story = {
  args: {
    tags: [
      'Digital Experience',
      'Customer Engagement',
      'DX',
      'Product Strategy',
      'User Experience',
      'ICP',
      'Innovation',
      'Agile',
      'Lean',
      'DevOps',
    ],
  },
  play: playManyTags,
};
