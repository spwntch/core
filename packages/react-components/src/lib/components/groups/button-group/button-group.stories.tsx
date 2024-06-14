import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ButtonGroup, { IButtonGroupProps } from './button-group';
import { Button } from '@spwntch/ui';
import { playBasic, playStacked } from './button-group.specs';

const componentDescription = `
### Overview
The \`ButtonGroup\` component displays a group of buttons either horizontally or vertically based on the \`stacked\` prop.

### Props
- \`stacked\`: If true, the buttons will be stacked vertically.
- \`children\`: The content of the ButtonGroup, usually buttons.
- \`className\`: Additional class names to apply to the ButtonGroup.

### Example
\`\`\`
<ButtonGroup stacked>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
\`\`\`

### Notes
This component is used to group buttons in a flexible manner, allowing for horizontal or vertical stacking.
`;

const meta: Meta<IButtonGroupProps> = {
  title: 'components/groups/button-group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    stacked: {
      description: 'If true, the buttons will be stacked vertically.',
      type: 'boolean',
    },
    children: {
      description: 'The content of the ButtonGroup, usually buttons.',
      type: 'string',
    },
    className: {
      description: 'Additional class names to apply to the ButtonGroup.',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<IButtonGroupProps>;

/**
 * Basic ButtonGroup example.
 * Displays a horizontal button group.
 */
export const Basic: Story = {
  args: {
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </>
    ),
  },
  play: playBasic,
};

/**
 * Stacked ButtonGroup example.
 * Displays a vertical button group.
 */
export const Stacked: Story = {
  args: {
    stacked: true,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </>
    ),
  },
  play: playStacked,
};
