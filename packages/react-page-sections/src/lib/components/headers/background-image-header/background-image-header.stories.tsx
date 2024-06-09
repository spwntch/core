import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundImageHeader } from './background-image-header';
import { withFullPage } from '../../../storybook/storybook-decorators';

/**
 * The `BackgroundImageHeader` component displays a section header with a background image.
 *
 * ## How to Use
 *
 * Wrap the `BackgroundImageHeader` component around any content that you want to include under the header.
 *
 * ```tsx
 * import { BackgroundImageHeader } from './background-image-header';
 *
 * export default function App() {
 *   const headerContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *     tags: ['Feature 1', 'Feature 2'],
 *   };
 *
 *   const image = {
 *     src: '/images/landscape-1.webp',
 *     alt: 'A beautiful landscape',
 *   };
 *
 *   return (
 *     <BackgroundImageHeader header={headerContent} image={image}>
 *       <button>Get Started</button>
 *       <button>Learn More</button>
 *     </BackgroundImageHeader>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof BackgroundImageHeader> = {
  title: 'content/headers/background-image-header',
  component: BackgroundImageHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withFullPage],
  argTypes: {
    header: {
      description: 'The content of the header',
      control: 'object',
    },
    image: {
      description: 'The background image',
      control: 'object',
    },
    placeRight: {
      description: 'Places the content to the right side',
      control: 'boolean',
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundImageHeader>;

/**
 * Basic BackgroundImageHeader example.
 * Demonstrates the BackgroundImageHeader component with text content.
 */
export const Basic: Story = {
  args: {
    header: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
      tags: ['Feature 1', 'Feature 2'],
    },
    image: {
      src: '/images/landscape-1.webp',
      alt: 'A beautiful landscape',
    },
    placeRight: false,
  },
};
