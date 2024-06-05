import type { Meta, StoryObj } from '@storybook/react';
import { StackedImageHeader } from './stacked-image-header';
import { withFullPage } from '../../../storybook/storybook-decorators';

/**
 * The `StackedImageHeader` component displays a section header with a stacked background image.
 *
 * ## How to Use
 *
 * Wrap the `StackedImageHeader` component around any content that you want to include under the header.
 *
 * ```tsx
 * import { StackedImageHeader } from './stacked-image-header';
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
 *     <StackedImageHeader header={headerContent} image={image}>
 *       <button>Get Started</button>
 *       <button>Learn More</button>
 *     </StackedImageHeader>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof StackedImageHeader> = {
  title: 'content/headers/stacked-image-header',
  component: StackedImageHeader,
  decorators:[withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    header: {
      description: 'The content of the header',
      control: 'object',
    },
    image: {
      description: 'The background image',
      control: 'object',
    },
    reverse: {
      description: 'Reverses the order of the image and the header',
      control: 'boolean',
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof StackedImageHeader>;

/**
 * Basic StackedImageHeader example.
 * Demonstrates the StackedImageHeader component with text content.
 */
export const Basic: Story = {
  args: {
    header: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    image: {
      src: '/images/landscape-1.webp',
      alt: 'A beautiful landscape',
    },
    reverse: false,
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
};
