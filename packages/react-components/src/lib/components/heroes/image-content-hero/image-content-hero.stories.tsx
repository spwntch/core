import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { ImageContentHero } from './image-content-hero';
import { playBasic } from './image-content-hero.specs';

const componentDescription = `
### Overview
The \`ImageContentHero\` component displays a prominent hero section with an optional background image, darkening, and background pattern. It includes a content container for inner content.

### Props
- \`className\`: Additional class name(s) for the container.
- \`image\`: The image object passed to the component.
- \`innerContent\`: The content to be displayed inside the container.

### Example
\`\`\`
<ImageContentHero image={{ src: "/path/to/image.jpg" }} innerContent={innerContent} />
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof ImageContentHero> = {
  title: 'components/heroes/image-content-hero',
  component: ImageContentHero,
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
      description: 'The content to be displayed inside the container',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageContentHero>;

const innerContent = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: {
    content: 'Pioneering the Future of Software Development',
  },
  body: [
    'Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development with an extensive library of reusable packages.',
    'Born from a vision to expedite project delivery while slashing costs, Spawntech embodies innovation by leveraging these libraries, enabling projects to be delivered five times quicker and at a fraction of traditional costs.',
    'Our mission is to deliver bespoke software solutions at unparalleled speed without compromising on quality or user satisfaction.',
  ],
  bullets: [
    {
      emoji: '🚀',
      title: 'Custom Software Development',
      body: 'Combining lean UX philosophies with agile and innovative methodologies.',
    },
    {
      emoji: '⭐',
      title: 'DevOps and Lean CI/CD',
      body: 'Implementing advanced DevOps practices to streamline development and reduce time-to-market.',
    },
    {
      emoji: '🔧',
      title: 'Technical Excellence',
      body: 'Ensuring high standards of quality and performance through continuous improvement.',
    },
  ],
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Basic ImageContentHero example.
 * Demonstrates a basic usage of the ImageContentHero component.
 */
export const Basic: Story = {
  args: {
    image: {
      src: '/images/abstract-1.webp',
      alt: 'Abstract Image 1',
    },
    innerContent,
  },
  play: playBasic,
};

/**
 * Darkened ImageContentHero example.
 * Demonstrates the ImageContentHero component with a darkened background image.
 */
export const Darkened: Story = {
  args: {
    image: {
      src: '/images/abstract-1.webp',
      alt: 'Abstract Image 1',
      darken: true,
    },
    innerContent,
  },
  play: playBasic,
};

/**
 * Split Left ImageContentHero example.
 * Demonstrates the ImageContentHero component with split-left coverage.
 */
export const SplitLeft: Story = {
  args: {
    image: {
      src: '/images/abstract-1.webp',
      alt: 'Abstract Image 1',
      coverage: 'split-left',
    },
    innerContent,
  },
  play: playBasic,
};

/**
 * Split Right ImageContentHero example.
 * Demonstrates the ImageContentHero component with split-right coverage.
 */
export const SplitRight: Story = {
  args: {
    image: {
      src: '/images/abstract-1.webp',
      alt: 'Abstract Image 1',
      coverage: 'split-right',
    },
    innerContent,
  },
  play: playBasic,
};

/**
 * Split Top ImageContentHero example.
 * Demonstrates the ImageContentHero component with split-top coverage.
 */
export const SplitTop: Story = {
  args: {
    image: {
      src: '/images/abstract-1.webp',
      alt: 'Abstract Image 1',
      coverage: 'split-top',
    },
    innerContent,
  },
  play: playBasic,
};

/**
 * Split Bottom ImageContentHero example.
 * Demonstrates the ImageContentHero component with split-bottom coverage.
 */
export const SplitBottom: Story = {
  args: {
    image: {
      src: '/images/abstract-1.webp',
      alt: 'Abstract Image 1',
      coverage: 'split-bottom',
    },
    innerContent,
  },
  play: playBasic,
};
