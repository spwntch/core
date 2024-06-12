import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SplitLayout } from './split-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { playBasic, playFlipped, playVertical } from './split-layout.specs';

const componentDescription = `
### Overview
The \`SplitLayout\` component divides the container into multiple sections, allowing users to place other components in each section. The main container size can be adjusted using the \`mainPaneCoverage\` prop.

### Props
- \`split\`: Specifies how the container should be split ('horizontal', 'vertical').
- \`flip\`: Reverses the order of the split panes.
- \`containers\`: An array of 2-4 elements to be placed in the split sections.
- \`mainPaneCoverage\`: Percentage coverage of the main container (default is 50%).

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
    containers: {
      description: 'An array of 2-4 elements to be placed in the split sections',
      control: 'object',
    },
    mainPaneCoverage: {
      description: 'Percentage coverage of the main container (default is 50%)',
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitLayout>;

const paneOne = (
  <div className="bg-blue-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane One Content</Card>
  </div>
);
const paneTwo = (
  <div className="bg-green-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Two Content</Card>
  </div>
);
const paneThree = (
  <div className="bg-yellow-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Three Content</Card>
  </div>
);
const paneFour = (
  <div className="bg-red-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Four Content</Card>
  </div>
);

const defaultArgs = {
  split: 'horizontal' as 'horizontal' | 'vertical',
  mainPaneCoverage: 50,
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

/**
 * WideMain SplitLayout example.
 * Demonstrates the SplitLayout component with a wider main container.
 */
export const WideMain: Story = {
  args: {
    ...defaultArgs,
    containers: [paneOne, paneTwo],
    mainPaneCoverage: 70, // Adjust the main container coverage to 70%
  },
  play: playBasic,
};


/**
 * SplitLayout with three containers.
 * Demonstrates the SplitLayout component with three containers.
 */
export const ThreeContainers: Story = {
  args: {
    ...defaultArgs,
    containers: [paneOne, paneTwo, paneThree],
  },
  play: playBasic,
};

/**
 * SplitLayout with four containers.
 * Demonstrates the SplitLayout component with four containers.
 */
export const FourContainers: Story = {
  args: {
    ...defaultArgs,
    containers: [paneOne, paneTwo, paneThree, paneFour],
  },
  play: playBasic,
};
