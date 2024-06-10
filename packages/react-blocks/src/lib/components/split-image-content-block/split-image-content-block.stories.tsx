import { Meta, StoryObj } from '@storybook/react';
import { withFullPage, withFullWidth } from '../../storybook/storybook-decorators';
import { SplitImageContentBlock } from './split-image-content-block';
import {
  playBasic,
  playShort,
  playTall,
  playHeroMode,
} from './split-image-content-block.specs';

const componentDescription = `
### Overview
The \`SplitImageContentBlock\` component displays a split layout with an image and optional content. The split direction can be horizontal or vertical, and the layout can be flipped.

### Props
- \`className\`: Additional class name(s) for the component.
- \`image\`: The image object containing the \`src\`, \`alt\` properties.
- \`innerContent\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.
- \`split\`: The direction to split the layout (\`horizontal\` or \`vertical\`).
- \`flip\`: Whether to flip the layout.
- \`height\`: The height of the header in pixels.
- \`hero\`: Boolean to apply full screen height.
- \`hAlign\`: Horizontal alignment of the content (\`left\`, \`center\`, \`right\`).
- \`vAlign\`: Vertical alignment of the content (\`top\`, \`middle\`, \`bottom\`).

### Example
\`\`\`
<SplitImageContentBlock 
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
  hAlign="left"
  vAlign="bottom"
/>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof SplitImageContentBlock> = {
  title: 'blocks/split-image-content-block',
  component: SplitImageContentBlock,
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
  },
};

export default meta;

type Story = StoryObj<typeof SplitImageContentBlock>;

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
 * Basic SplitImageContentBlock example.
 * Demonstrates a basic usage of the SplitImageContentBlock component.
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
 * Horizontal Flipped SplitImageContentBlock example.
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
 * Vertical SplitImageContentBlock example.
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
 * Vertical Flipped SplitImageContentBlock example.
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
 * Short SplitImageContentBlock example.
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
 * Tall SplitImageContentBlock example.
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
 * Hero SplitImageContentBlock example.
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

/**
 * Bottom Left Hero Mode.
 * Demonstrates the SplitImageContentBlock component with bottom-left aligned text content in hero mode.
 */
export const BottomLeftHero: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'horizontal',
    flip: false,
    hero: true,
    hAlign: 'left',
    vAlign: 'bottom',
  },
  play: playHeroMode,
};
