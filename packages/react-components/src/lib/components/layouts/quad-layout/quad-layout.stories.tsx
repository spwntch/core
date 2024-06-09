import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { QuadLayout, IQuadLayoutProps } from './quad-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { playBasic, playFlipOne } from './quad-layout.specs';

const componentDescription = `
### Overview
The \`QuadLayout\` component divides the container into four sections (quadrants), allowing users to place other components in each section.

### Props
- \`flipQuadrants\`: An array of four boolean values to flip each quadrant independently.
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
    flipQuadrants: {
      description:
        'An array of four boolean values to flip each quadrant independently',
      control: 'object',
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

const defaultArgs: IQuadLayoutProps = {
  containers: [paneOne, paneTwo, paneThree, paneFour],
};

/**
 * Basic QuadLayout example.
 * Demonstrates a basic usage of the QuadLayout component.
 */
export const Basic: Story = {
  args: defaultArgs,
  play: playBasic,
};
