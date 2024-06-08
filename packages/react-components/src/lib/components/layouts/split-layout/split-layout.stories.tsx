import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SplitLayout } from './split-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';

const componentDescription = `
### Overview
The \`SplitLayout\` component divides the container into two sections, allowing users to place other components in each section.

### Props
- \`split\`: Specifies how the container should be split ('left', 'right', 'top', 'bottom').
- \`containers\`: An array of two elements to be placed in the split sections.

### Example
\`\`\`
<SplitLayout split="left" containers={[<div>Left Side Content</div>, <div>Right Side Content</div>]} />
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
      options: ['left', 'right', 'top', 'bottom'],
    },
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitLayout>;

/**
 * Basic SplitLayout example.
 * Demonstrates a basic usage of the SplitLayout component.
 */
export const Basic: Story = {
  args: {
    split: 'left',
    containers: [
      <Card className="p-4">Left Side Content</Card>,
      <Card className="p-4">Right Side Content</Card>,
    ],
  },
};
