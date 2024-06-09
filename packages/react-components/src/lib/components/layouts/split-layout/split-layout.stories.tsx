import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SplitLayout } from './split-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { playBasic, playFlipped, playVertical } from './split-layout.specs';

const componentDescription = `
### Overview
The \`SplitLayout\` component divides the container into two sections, allowing users to place other components in each section.

### Props
- \`split\`: Specifies how the container should be split ('horizontal', 'vertical').
- \`flip\`: Reverses the order of the split panes.
- \`containers\`: An array of two elements to be placed in the split sections.

### Example
\`\`\`
<SplitLayout split="horizontal" containers={[<div>Pane One Content</div>, <div>Pane Two Content</div>]} />
\`\`\`

### Notes
This component is flexible and can be used to create various layouts such as split screens.
`;

const meta: Meta<typeof SplitLayout> = {
  title: 'components/layouts/split-layout',
  component: SplitLayout,
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
    split: {
      description: 'Specifies how the container should be split',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    flip: {
      description: 'Reverses the order of the split panes',
      control: 'boolean',
    },
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    containers: {
      description: 'An array of two elements to be placed in the split sections',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitLayout>;

const paneOne = (
  <div className="bg-gray-200 h-full w-full flex items-center justify-center p-16">
    <Card className="p-4">Pane One Content</Card>
  </div>
);
const paneTwo = (
  <div className="bg-gray-300 h-full w-full flex items-center justify-center p-16">
    <Card className="p-4">Pane Two Content</Card>
  </div>
);

const defaultArgs = {
  split: 'horizontal' as 'horizontal' | 'vertical',
};

/**
 * Basic SplitLayout example.
 * Demonstrates a basic usage of the SplitLayout component with a horizontal split.
 */
export const Basic: Story = {
  args: {
    ...defaultArgs,
    containers: [paneOne, paneTwo],
  },
  play: playBasic,
};

/**
 * Flipped Horizontal SplitLayout example.
 * Demonstrates the SplitLayout component with a flipped horizontal split.
 */
export const FlippedHorizontalSplit: Story = {
  args: {
    ...defaultArgs,
    containers: [paneOne, paneTwo],
    flip: true,
  },
  play: playFlipped,
};

/**
 * Vertical SplitLayout example.
 * Demonstrates the SplitLayout component with a vertical split.
 */
export const VerticalSplit: Story = {
  args: {
    ...defaultArgs,
    split: 'vertical',
    containers: [paneOne, paneTwo],
  },
  play: playVertical,
};

/**
 * Flipped Vertical SplitLayout example.
 * Demonstrates the SplitLayout component with a flipped vertical split.
 */
export const FlippedVerticalSplit: Story = {
  args: {
    ...defaultArgs,
    split: 'vertical',
    containers: [paneOne, paneTwo],
    flip: true,
  },
  play: playFlipped,
};
