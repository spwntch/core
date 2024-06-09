import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { BasicHero } from './basic-hero';
import { playBasic, playLeftAligned, playRightAligned } from './basic-hero.specs';

/**
 * The `BasicHero` component displays a section hero with a heading, sub-heading, and body text.
 *
 * ## How to Use
 *
 * Wrap the `BasicHero` component around any content that you want to include under the hero.
 *
 * ```tsx
 * import { BasicHero } from './basic-hero';
 *
 * export default function App() {
 *   const heroContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *   };
 *
 *   return (
 *     <BasicHero hero={heroContent}>
 *       <button>Get Started</button>
 *       <button>Learn More</button>
 *     </BasicHero>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof BasicHero> = {
  title: 'content/heroes/basic-hero',
  component: BasicHero,
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
    alignment: {
      description: 'Text alignment',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicHero>;

/**
 * Basic BasicHero example.
 * Demonstrates the BasicHero component with centered text content.
 */
export const Basic: Story = {
  args: {
    alignment: 'center',
    hero: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
  play: playBasic,
};

/**
 * Left Aligned BasicHero example.
 * Demonstrates the BasicHero component with left-aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    alignment: 'left',
    hero: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
  play: playLeftAligned,
};

/**
 * Right Aligned BasicHero example.
 * Demonstrates the BasicHero component with right-aligned text content.
 */
export const RightAligned: Story = {
  args: {
    alignment: 'right',
    hero: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
  play: playRightAligned,
};

