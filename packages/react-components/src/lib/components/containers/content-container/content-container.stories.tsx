import { Button } from '@spwntch/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { IContent } from '../../../types';
import { ContentContainer } from './content-container';
import { playBasic } from './content-container.specs';

/**
 * The `ContentContainer` component displays a section with a heading, sub-heading, body text, and optional bullets and tags.
 *
 * ## How to Use
 *
 * Wrap the `ContentContainer` component around any content that you want to include under the section.
 *
 * ```tsx
 * import { ContentContainer } from './content-container';
 *
 * export default function App() {
 *   const innerContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *   };
 *
 *   return (
 *     <ContentContainer innerContent={innerContent} hAlign="center" vAlign="middle">
 *       <Button>Get Started</Button>
 *       <Button variant="secondary">Learn More</Button>
 *     </ContentContainer>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof ContentContainer> = {
  title: 'components/containers/content-container',
  component: ContentContainer,
  tags: ['autodocs'],
  decorators: [withFullPage],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
    innerContent: {
      description: 'The content of the section',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentContainer>;

const innerContent: IContent = {
  announcement: {
    message: 'Spawntech is transforming software development',
    href: '/news',
  },
  title: 'Spawntech Company Overview',
  subTitle: 'Pioneering a transformative approach to software development',
  body: [
    'Spawntech pioneers transformative software development, blending advanced DevOps, precise UX implementation, and customized development with reusable packages. Our approach integrates the latest technologies to ensure robust and scalable solutions that meet the evolving needs of our clients. By utilizing a comprehensive library of reusable packages, we can accelerate the development process and maintain high standards of quality and performance.',
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
 * Basic ContentContainer example.
 * Demonstrates the ContentContainer component with various content fields and buttons as children.
 */
export const Basic: Story = {
  args: {
    innerContent,
    hAlign: 'center',
    vAlign: 'middle',
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
 * Top Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-left aligned text content.
 */
export const TopLeft: Story = {
  args: {
    innerContent,
    hAlign: 'left',
    vAlign: 'top',
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
 * Top Center Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-center aligned text content.
 */
export const TopCenter: Story = {
  args: {
    innerContent,
    hAlign: 'center',
    vAlign: 'top',
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
 * Top Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-right aligned text content.
 */
export const TopRight: Story = {
  args: {
    innerContent,
    hAlign: 'right',
    vAlign: 'top',
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
 * Middle Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with middle-left aligned text content.
 */
export const MiddleLeft: Story = {
  args: {
    innerContent,
    hAlign: 'left',
    vAlign: 'middle',
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
 * Middle Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with middle-right aligned text content.
 */
export const MiddleRight: Story = {
  args: {
    innerContent,
    hAlign: 'right',
    vAlign: 'middle',
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
 * Bottom Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-left aligned text content.
 */
export const BottomLeft: Story = {
  args: {
    innerContent,
    hAlign: 'left',
    vAlign: 'bottom',
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
 * Bottom Center Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-center aligned text content.
 */
export const BottomCenter: Story = {
  args: {
    innerContent,
    hAlign: 'center',
    vAlign: 'bottom',
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
 * Bottom Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-right aligned text content.
 */
export const BottomRight: Story = {
  args: {
    innerContent,
    hAlign: 'right',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
  play: playBasic,
};
