import { Meta, StoryObj } from '@storybook/react';
import { Li } from './li';
import { Ol, OlProps } from './ol';

const meta: Meta<typeof Ol> = {
  title: 'typography/ol',
  component: Ol,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<OlProps>;

/**
 * Ol component within a typical usage scenario.
 */
export const defaultStory: Story = {
  render: (args) => (
    <Ol {...args}>
      <Li>Research the topic thoroughly</Li>
      <Li>Create an outline of key points</Li>
      <Li>Write the first draft</Li>
      <Li>Revise and edit your draft</Li>
      <Li>Proofread for final touches</Li>
    </Ol>
  ),
};
defaultStory.storyName = 'Default';
