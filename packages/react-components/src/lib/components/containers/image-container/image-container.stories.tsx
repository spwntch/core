import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  BackgroundImageContainer,
  IBackgroundImageContainerProps,
} from './image-container';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { playBasic } from './image-container.specs';

const componentDescription = `
### Overview
The \`BackgroundImageContainer\` component displays a background image with optional darkening, rounding, and blurring.

It serves as a versatile container for displaying content with a styled background.

### Props
- \`className\`: Additional class name(s) for the container.
- \`image\`: The image object containing the \`src\`, \`alt\`, and \`darken\` properties.
- \`rounded\`: The rounding size (\`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`, \`xxl\`, \`full\`).
- \`blur\`: A boolean indicating if the background image should be blurred, or the string 'edges' to blur only the edges.
- \`children\`: The content to be displayed inside the container.

### Example
\`\`\`
<BackgroundImageContainer image={{ src: '/path/to/image.jpg', darken: true }} rounded="lg" blur>
  <Content />
</BackgroundImageContainer>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof BackgroundImageContainer> = {
  title: 'components/containers/image-container',
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
      control: 'text',
    },
    image: {
      description: 'The image object passed to the component',
      control: 'object',
    },
    rounded: {
      description: 'The rounding size',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    blur: {
      description:
        'A boolean indicating if the background image should be blurred',
      control: 'select',
      options: ['edges', true, false],
    },
    children: {
      description: 'The content to be displayed inside the container',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundImageContainer>;

const image = {
  src: '/images/guy-sitting-at-tech-control-station.webp',
  alt: 'Guy sitting at tech control station',
  darken: true,
};

const defaultArgs: IBackgroundImageContainerProps = {
  image,
  children: (
    <div className="h-full flex items-center justify-center">
      <Card className="p-4 opacity-75">Your Content Here</Card>
    </div>
  ),
};

/**
 * Basic BackgroundImageContainer example.
 * Demonstrates a basic usage of the BackgroundImageContainer component.
 */
export const Basic: Story = {
  args: defaultArgs,
  play: playBasic,
};

/**
 * Light BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component without darkening the background image.
 */
export const Light: Story = {
  args: {
    image: {
      ...image,
      darken: false,
    },
    children: (
      <div className="h-full flex items-center justify-center">
        <Card className="p-4 opacity-75">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Custom Content BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with custom content inside.
 */
export const CustomContent: Story = {
  args: {
    image,
    children: (
      <div className="h-full flex flex-col items-center justify-center">
        <Card className="p-4 mb-4 opacity-75">Custom Content 1</Card>
        <Card className="p-4 opacity-75">Custom Content 2</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Rounded BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with rounded corners.
 */
export const Rounded: Story = {
  args: {
    ...defaultArgs,
    rounded: 'xxl',
  },
  play: playBasic,
};

/**
 * Blurred BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with a blurred background image.
 */
export const Blurred: Story = {
  args: {
    ...defaultArgs,
    blur: true,
  },
  play: playBasic,
};


/**
 * Edge Blurred BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with edges blurred.
 */
export const EdgeBlurred: Story = {
  args: {
    ...defaultArgs,
    blur: 'edges',
  },
  play: playBasic,
};
