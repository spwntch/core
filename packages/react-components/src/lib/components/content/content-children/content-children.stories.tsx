import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ContentChildren } from './content-children';
import { Button } from '@/react-ui';
import { playBasic } from './content-children.specs';

const componentDescription = `
### Overview
The \`ContentChildren\` component is a flexible container designed to align its children based on specified alignment classes. It provides a consistent layout for various child elements, supporting top, middle, and bottom alignments in combination with left, center, and right alignments.

### Props
- \`alignmentClass\`: The alignment class for the children container. Options include 'top-left', 'top-center', 'top-right', 'middle-left', 'middle-center', 'middle-right', 'bottom-left', 'bottom-center', and 'bottom-right'.
- \`className\`: Additional class name(s) for the container.
- \`children\`: The content to be displayed inside the container.

### Example
\`\`\`tsx
import { ContentChildren } from './content-children';
import { Button } from '@/react-ui';

<ContentChildren alignmentClass="middle-center">
  <Button>Get Started</Button>
  <Button variant="secondary">Learn More</Button>
</ContentChildren>
\`\`\`

### Notes
Use the \`ContentChildren\` component to consistently align various child elements within a section, ensuring a flexible and responsive layout.
`;

const meta: Meta<typeof ContentChildren> = {
  title: 'components/content/content-children',
  component: ContentChildren,
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
    alignmentClass: {
      description: 'The alignment class for the children container',
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'middle-center',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      defaultValue: 'middle-center',
    },
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    children: {
      description: 'The content to be displayed inside the container',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentChildren>;

export const Basic: Story = {
  args: {
    alignmentClass: 'middle-center',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
  render: (args) => <ContentChildren {...args} />,
  play: playBasic,
};
