import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { ImageContentHero } from './image-content-hero';
import { playBasic } from './image-content-hero.specs';

const componentDescription = `
### Overview
The \`ImageContentHero\` component displays a prominent hero section with an optional background image, darkening, and background pattern. It includes a content container for inner content and supports additional children elements.

### Props
- \`className\`: Additional class name(s) for the container.
- \`image\`: The image object passed to the component.
- \`innerContent\`: The content to be displayed inside the container.
- \`children\`: Additional elements to be displayed inside the content container.

### Example
\`\`\`
<ImageContentHero image={{ src: "/path/to/image.jpg" }} innerContent={innerContent}>
  <Button>Get Started</Button>
  <Button variant="secondary">Learn More</Button>
</ImageContentHero>
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
    children: {
      description: 'Additional elements to be displayed inside the content container',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageContentHero>;

const innerContent = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  body: [
    'Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development.',
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
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
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
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
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
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
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
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
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
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
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
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
  play: playBasic,
};
