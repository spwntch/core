import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SplitLayout } from './split-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';

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
  decorators: [withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
  },
};

export default meta;

type Story = StoryObj<typeof SplitLayout>;

const paneOne = <Card className="p-4">Pane One Content</Card>;
const paneTwo = <Card className="p-4">Pane Two Content</Card>;

/**
 * Basic SplitLayout example.
 * Demonstrates a basic usage of the SplitLayout component with a horizontal split.
 */
export const Basic: Story = {
  args: {
    split: 'horizontal',
    containers: [paneOne, paneTwo],
  },
};

/**
 * Vertical SplitLayout example.
 * Demonstrates the SplitLayout component with a vertical split.
 */
export const VerticalSplit: Story = {
  args: {
    split: 'vertical',
    containers: [paneOne, paneTwo],
  },
};

/**
 * Flipped Horizontal SplitLayout example.
 * Demonstrates the SplitLayout component with a flipped horizontal split.
 */
export const FlippedHorizontalSplit: Story = {
  args: {
    split: 'horizontal',
    flip: true,
    containers: [paneOne, paneTwo],
  },
};

/**
 * Flipped Vertical SplitLayout example.
 * Demonstrates the SplitLayout component with a flipped vertical split.
 */
export const FlippedVerticalSplit: Story = {
  args: {
    split: 'vertical',
    flip: true,
    containers: [paneOne, paneTwo],
  },
};
