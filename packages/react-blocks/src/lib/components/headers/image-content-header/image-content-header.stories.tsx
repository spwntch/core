import { Meta, StoryObj } from '@storybook/react';
import { withFullWidth } from '../../../storybook/storybook-decorators';
import { ImageContentHeader } from './image-content-header';
import {
  playBasic,
  playLeft,
  playRight,
  playShort,
  playTall,
} from './image-content-header.specs';

const componentDescription = `
### Overview
The \`ImageContentHeader\` component displays a background image with optional darkening, with content centered horizontally and vertically. The height of the component can be customized.

### Props
- \`className\`: Additional class name(s) for the component.
- \`image\`: The image object containing the \`src\`, \`alt\`, and \`darken\` properties.
- \`innerContent\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.
- \`hAlign\`: The horizontal alignment of the content (\`left\`, \`center\`, \`right\`).
- \`height\`: The height of the header in pixels.

### Example
\`\`\`
<ImageContentHeader 
  image={{ src: '/path/to/image.jpg', darken: true }}
  innerContent={{
    title: { content: 'Welcome to Spawntech' },
    subTitle: { content: 'Pioneering the Future of Software Development' },
    tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js']
  }}
  className="text-white"
  hAlign="center"
  height={300}
/>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof ImageContentHeader> = {
  title: 'blocks/headers/image-content-header',
  component: ImageContentHeader,
  decorators: [withFullWidth],
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
    image: {
      description: 'The image object passed to the component',
      control: 'object',
    },
    innerContent: {
      description: 'The content object passed to the component',
      control: 'object',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    height: {
      description: 'Height of the header in pixels',
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageContentHeader>;

const image = {
  src: '/images/guy-sitting-at-tech-control-station.webp',
  alt: 'Guy sitting at tech control station',
  darken: true,
};

const innerContent = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Basic ImageContentHeader example.
 * Demonstrates a basic usage of the ImageContentHeader component.
 */
export const Basic: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
  },
  play: playBasic,
};

/**
 * Left Aligned ImageContentHeader example.
 * Demonstrates the ImageContentHeader component with left aligned text content.
 */
export const Left: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'left',
  },
  play: playLeft,
};

/**
 * Right Aligned ImageContentHeader example.
 * Demonstrates the ImageContentHeader component with right aligned text content.
 */
export const Right: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'right',
  },
  play: playRight,
};

/**
 * ImageContentHeader example with height of 200px.
 * Demonstrates the ImageContentHeader component with right aligned text content.
 */
export const Short: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    height: 180,
  },
  play: playShort,
};

/**
 * ImageContentHeader example with height of 500px.
 * Demonstrates the ImageContentHeader component with right aligned text content.
 */
export const Tall: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    height: 480,
  },
  play: playTall,
};
