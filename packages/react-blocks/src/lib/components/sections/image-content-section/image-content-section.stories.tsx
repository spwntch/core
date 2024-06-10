import { Meta, StoryObj } from '@storybook/react';
import { withFullWidth } from '../../../storybook/storybook-decorators';
import { ImageContentSection } from './image-content-section';
import {
  playBasic,
  playHeroMode,
  playLeft,
  playRight,
  playShort,
  playTall,
} from './image-content-section.specs';

const componentDescription = `
### Overview
The \`ImageContentSection\` component displays a background image with optional darkening, with content centered horizontally and vertically. The height of the component can be customized.

### Props
- \`className\`: Additional class name(s) for the component.
- \`image\`: The image object containing the \`src\`, \`alt\`, and \`darken\` properties.
- \`innerContent\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.
- \`hAlign\`: The horizontal alignment of the content (\`left\`, \`center\`, \`right\`).
- \`height\`: The height of the header in pixels.

### Example
\`\`\`
<ImageContentSection 
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

const meta: Meta<typeof ImageContentSection> = {
  title: 'blocks/sections/image-content-section',
  component: ImageContentSection,
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
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    height: {
      description: 'Height of the header in pixels',
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageContentSection>;

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
 * Default ImageContentSection example.
 * Demonstrates a basic usage of the ImageContentSection component with centered content.
 */
export const Default: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'center',
    vAlign: 'middle',
  },
  play: playBasic,
};

/**
 * Left Aligned Content.
 * Demonstrates the ImageContentSection component with left aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'left',
    vAlign: 'middle',
  },
  play: playLeft,
};

/**
 * Right Aligned Content.
 * Demonstrates the ImageContentSection component with right aligned text content.
 */
export const RightAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'right',
    vAlign: 'middle',
  },
  play: playRight,
};

/**
 * Top Aligned Content.
 * Demonstrates the ImageContentSection component with top aligned text content.
 */
export const TopAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'center',
    vAlign: 'top',
  },
};

/**
 * Bottom Aligned Content.
 * Demonstrates the ImageContentSection component with bottom aligned text content.
 */
export const BottomAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'center',
    vAlign: 'bottom',
  },
};

/**
 * Short ImageContentSection.
 * Demonstrates the ImageContentSection component with a height of 240px.
 */
export const ShortHeight: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    height: 240,
  },
  play: playShort,
};

/**
 * Tall ImageContentSection.
 * Demonstrates the ImageContentSection component with a height of 720px.
 */
export const TallHeight: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    height: 720,
  },
  play: playTall,
};

/**
 * ImageContentSection in Hero Mode.
 * Demonstrates the ImageContentSection component with full screen height.
 */
export const HeroMode: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hero: true,
  },
  play: playHeroMode,
};

/**
 * Bottom Left Hero Mode.
 * Demonstrates the ImageContentSection component with bottom-left aligned text content in hero mode.
 */
export const BottomLeftHero: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'left',
    vAlign: 'bottom',
    hero: true,
  },
};
