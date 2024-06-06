import { Card } from '@/react-ui';
import { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import BackgroundImageContainer from './background-image-container';
import { playBasic } from './background-image-container.specs';

const componentDescription = `
### Overview
The \`BackgroundImageContainer\` component displays a background image with optional darkening and a background pattern. 

It serves as a versatile container for displaying content with a styled background.

### Props
- \`className\`: Additional class name(s) for the container.
- \`src\`: The URL of the background image.
- \`darkenImage\`: Whether to darken the background image.
- \`showBackgroundPattern\`: Whether to show a background pattern.
- \`coverage\`: The coverage style of the background image (\`full\`, \`split-left\`, \`split-right\`, \`split-top\`, \`split-bottom\`).
- \`children\`: The content to be displayed inside the container.

### Example
\`\`\`
<BackgroundImageContainer src="/path/to/image.jpg" darkenImage showBackgroundPattern>
  <Content />
</BackgroundImageContainer>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof BackgroundImageContainer> = {
  title: 'components/containers/background-image-container',
  component: BackgroundImageContainer,
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
      type: 'string',
    },
    image: {
      description: 'The image object passed to the component',
      // type: 'object',
      // defaultValue: '/images/guy-sitting-at-tech-control-station.webp',
    },
    children: {
      description: 'The content to be displayed inside the container',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundImageContainer>;

/**
 * Basic BackgroundImageContainer example.
 * Demonstrates a basic usage of the BackgroundImageContainer component.
 */
export const Basic: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Darkened BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with a darkened background image.
 */
export const Darkened: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
      darken: true,
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  // play: playAccessibilityTest,
};

/**
 * Multiple Items BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with multiple items inside.
 */
export const MultipleItems: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          <Card className="p-4 opacity-50">Content item 1</Card>
          <Card className="p-4 opacity-50">Content item 2</Card>
          <Card className="p-4 opacity-50">Content item 3</Card>
          <Card className="p-4 opacity-50">Content item 4</Card>
        </div>
      </div>
    ),
  },
  // play: playMultipleItems,
};

/**
 * Empty BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with no content inside.
 */
export const EmptyContainer: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
    },
  },
  // play: playEmptyContainer,
};

/**
 * Split Left BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with split-left coverage.
 */
export const SplitLeft: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
      coverage: 'split-left',
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Split Right BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with split-right coverage.
 */
export const SplitRight: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
      coverage: 'split-right',
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Split Top BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with split-top coverage.
 */
export const SplitTop: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
      coverage: 'split-top',
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Split Bottom BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with split-bottom coverage.
 */
export const SplitBottom: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
      coverage: 'split-bottom',
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};
