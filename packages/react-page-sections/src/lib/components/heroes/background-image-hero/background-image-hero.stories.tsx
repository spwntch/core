import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { BackgroundImageHero } from './background-image-hero';

/**
 * The `BackgroundImageHero` component displays a hero section with a background image.
 *
 * ## How to Use
 *
 * Wrap the `BackgroundImageHero` component around any content that you want to include under the hero.
 *
 * ```tsx
 * import { BackgroundImageHero } from './background-image-hero';
 *
 * export default function App() {
 *   const heroContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *   };
 *
 *   const image = {
 *     src: '/images/landscape-1.webp',
 *     alt: 'A beautiful landscape',
 *   };
 *
 *   return (
 *     <BackgroundImageHero hero={heroContent} image={image}>
 *       <button>Get Started</button>
 *       <button>Learn More</button>
 *     </BackgroundImageHero>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof BackgroundImageHero> = {
  title: 'content/heroes/background-image-hero',
  component: BackgroundImageHero,
  tags: ['autodocs'],
  decorators: [withFullPage],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    hero: {
      description: 'The content of the hero',
      control: 'object',
    },
    image: {
      description: 'The background image',
      control: 'object',
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundImageHero>;

/**
 * Basic BackgroundImageHero example.
 * Demonstrates the BackgroundImageHero component with text content.
 */
export const Basic: Story = {
  args: {
    className: 'text-center',
    hero: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    image: {
      src: '/images/landscape-1.webp',
      alt: 'A beautiful landscape',
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
};
