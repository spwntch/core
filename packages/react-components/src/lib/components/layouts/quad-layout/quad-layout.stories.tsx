import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { QuadLayout } from './quad-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { playBasic, playFlipped } from './quad-layout.specs';

const componentDescription = `
### Overview
The \`QuadLayout\` component divides the container into four sections (quadrants), allowing users to place other components in each section.

### Props
- \`flip\`: Reverses the order of the quadrants.
- \`containers\`: An array of four elements to be placed in the quadrants.

### Example
\`\`\`
<QuadLayout containers={[<div>Pane One Content</div>, <div>Pane Two Content</div>, <div>Pane Three Content</div>, <div>Pane Four Content</div>]} />
\`\`\`

### Notes
This component is flexible and can be used to create various layouts such as quad screens.
`;

const meta: Meta<typeof QuadLayout> = {
  title: 'components/layouts/quad-layout',
  component: QuadLayout,
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
    flip: {
      description: 'Reverses the order of the quadrants',
      control: 'boolean',
    },
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    containers: {
      description: 'An array of four elements to be placed in the quadrants',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof QuadLayout>;

const paneOne = (
  <div className="bg-gray-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane One Content</Card>
  </div>
);
const paneTwo = (
  <div className="bg-gray-300 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Two Content</Card>
  </div>
);
const paneThree = (
  <div className="bg-gray-400 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Three Content</Card>
  </div>
);
const paneFour = (
  <div className="bg-gray-500 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Four Content</Card>
  </div>
);

const args = {
  containers: [paneOne, paneTwo, paneThree, paneFour],
};

/**
 * Basic QuadLayout example.
 * Demonstrates a basic usage of the QuadLayout component.
 */
export const Basic: Story = {
  // args,
  play: playBasic,
};

/**
 * Flipped QuadLayout example.
 * Demonstrates the QuadLayout component with a flipped layout.
 */
export const Flipped: Story = {
  args: {
    // ...args,
    flip: true,
  },
  play: playFlipped,
};
