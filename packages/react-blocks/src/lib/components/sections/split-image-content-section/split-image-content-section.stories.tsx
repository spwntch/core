import { Meta, StoryObj } from '@storybook/react';
import { withFullWidth } from '../../../storybook/storybook-decorators';
import { SplitImageContentSection } from './split-image-content-section';
import {
  playBasic,
  playShort,
  playTall,
  playHeroMode,
} from './split-image-content-section.specs';

const componentDescription = `
### Overview
The \`SplitImageContentSection\` component displays a split layout with an image and optional content. The split direction can be horizontal or vertical, and the layout can be flipped.

### Props
- \`className\`: Additional class name(s) for the component.
- \`image\`: The image object containing the \`src\`, \`alt\` properties.
- \`innerContent\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.
- \`split\`: The direction to split the layout (\`horizontal\` or \`vertical\`).
- \`flip\`: Whether to flip the layout.
- \`height\`: The height of the header in pixels.
- \`hero\`: Boolean to apply full screen height.

### Example
\`\`\`
<SplitImageContentSection 
  image={{ src: '/path/to/image.jpg', alt: 'Image description' }}
  innerContent={{
    title: { content: 'Welcome to Spawntech' },
    subTitle: { content: 'Pioneering the Future of Software Development' },
    tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js']
  }}
  className="text-white"
  split="horizontal"
  flip={false}
  height={300}
  hero={true}
/>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof SplitImageContentSection> = {
  title: 'blocks/sections/split-image-content-section',
  component: SplitImageContentSection,
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
    split: {
      description: 'The direction to split the layout',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    flip: {
      description: 'Whether to flip the layout',
      control: 'boolean',
    },
    height: {
      description: 'Height of the header in pixels',
      control: 'number',
    },
    hero: {
      description: 'Boolean to apply full screen height',
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitImageContentSection>;

const image = {
  src: '/images/guy-sitting-at-tech-control-station.webp',
  alt: 'Guy sitting at tech control station',
};

const innerContent = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Basic SplitImageContentSection example.
 * Demonstrates a basic usage of the SplitImageContentSection component.
 */
export const Basic: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'horizontal',
    flip: false,
  },
  play: playBasic,
};

/**
 * Horizontal Flipped SplitImageContentSection example.
 * Demonstrates the component with horizontal split and flipped layout.
 */
export const HorizontalFlipped: Story = {
  args: {
    ...Basic.args,
    flip: true,
  },
  play: playBasic,
};

/**
 * Vertical SplitImageContentSection example.
 * Demonstrates the component with vertical split layout.
 */
export const Vertical: Story = {
  args: {
    ...Basic.args,
    split: 'vertical',
  },
  play: playBasic,
};

/**
 * Vertical Flipped SplitImageContentSection example.
 * Demonstrates the component with vertical split and flipped layout.
 */
export const VerticalFlipped: Story = {
  args: {
    ...Basic.args,
    split: 'vertical',
    flip: true,
  },
  play: playBasic,
};

/**
 * Short SplitImageContentSection example.
 * Demonstrates the component with a short height.
 */
export const HorizontalShort: Story = {
  args: {
    ...Basic.args,
    height: 240,
  },
  play: playShort,
};

/**
 * Tall SplitImageContentSection example.
 * Demonstrates the component with a tall height.
 */
export const VerticalTall: Story = {
  args: {
    ...Basic.args,
    split: 'vertical',
    height: 720,
  },
  play: playTall,
};

/**
 * Hero SplitImageContentSection example.
 * Demonstrates the component with full screen height.
 */
export const HeroMode: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'horizontal',
    flip: false,
    hero: true,
  },
  play: playHeroMode,
};
