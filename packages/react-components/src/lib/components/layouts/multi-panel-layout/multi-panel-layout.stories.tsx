import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MultiPanelLayout, IMultiPanelLayoutProps } from './multi-panel-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { playBasic, playFlip } from './multi-panel-layout.specs';

const componentDescription = `
### Overview
The \`MultiPanelLayout\` component divides the container into a main block and two sub-blocks. The layout adjusts for different screen sizes. The \`flip\` prop allows the sub-blocks to be placed on the left and the main block on the right.

### Props
- \`containers\`: An array of three elements to be placed in the blocks.
- \`flip\`: A boolean to flip the layout.
- \`mainBlockWidth\`: Width of the main block (default is 50%).

### Example
\`\`\`
<MultiPanelLayout containers={[<div>Main Block Content</div>, <div>Sub Block 1 Content</div>, <div>Sub Block 2 Content</div>]} flip={true} />
\`\`\`

### Notes
This component is flexible and adapts to different screen sizes.
`;

const meta: Meta<typeof MultiPanelLayout> = {
  title: 'components/layouts/multi-panel-layout',
  component: MultiPanelLayout,
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
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    containers: {
      description: 'An array of three elements to be placed in the blocks',
      control: 'object',
    },
    flip: {
      description: 'A boolean to flip the layout',
      control: 'boolean',
    },
    mainBlockWidth: {
      description: 'Width of the main block (default is 50%)',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiPanelLayout>;

const mainBlock = (
  <div className="bg-blue-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Main Block Content</Card>
  </div>
);
const subBlock1 = (
  <div className="bg-green-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Sub Block 1 Content</Card>
  </div>
);
const subBlock2 = (
  <div className="bg-yellow-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Sub Block 2 Content</Card>
  </div>
);

const defaultArgs: IMultiPanelLayoutProps = {
  containers: [mainBlock, subBlock1, subBlock2],
};

/**
 * Basic MultiPanelLayout example.
 * Demonstrates a basic usage of the MultiPanelLayout component.
 */
export const Basic: Story = {
  args: defaultArgs,
  play: playBasic,
};

/**
 * Flipped MultiPanelLayout example.
 * Demonstrates the MultiPanelLayout component with flipped layout.
 */
export const Flipped: Story = {
  args: {
    ...defaultArgs,
    flip: true,
  },
  play: playFlip,
};

/**
 * Wide MultiPanelLayout example.
 * Demonstrates a wide main content pane.
 */
export const Wide: Story = {
  args: { ...defaultArgs, mainBlockWidth: '70%' },
  play: playBasic,
};

/**
 * Narrow MultiPanelLayout example.
 * Demonstrates a narrow main content pane.
 */
export const Narrow: Story = {
  args: { ...defaultArgs, mainBlockWidth: '30%' },
  play: playBasic,
};
