import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { ImageContentHero } from './image-content-hero';

/**
 * ## Overview
 * The `ImageContentLayer` component is a simple wrapper around the `BackgroundImageContainer` component, displaying a background image.
 *
 * ## Props
 * - `image`: The image object containing `src`, `alt`, and other image-related properties.
 *
 * ## Example
 * ```tsx
 * import { ImageContentLayer } from './image-content-layer';
 *
 * export default function App() {
 *   const image = {
 *     src: '/path/to/image.jpg',
 *     alt: 'An example image',
 *     darken: true,
 *     coverage: 'full',
 *   };
 *
 *   return (
 *     <ImageContentLayer image={image} />
 *   );
 * }
 * ```
 */
const meta: Meta<typeof ImageContentHero> = {
  title: 'components/heroes/image-content-hero',
  component: ImageContentHero,
  decorators: [withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      description:
        'The image object containing `src`, `alt`, and other image-related properties.',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageContentHero>;

/**
 * ## Basic example.
 * Demonstrates the ImageContentLayer component with a basic image.
 */
export const Basic: Story = {
  args: {
    image: {
      src: '/images/guy-sitting-at-tech-control-station.webp',
      alt: 'Guy sitting at tech control station',
      darken: true,
      coverage: 'full',
    },
    innerContent: {
      title: {content:'Heading', className: 'text-white'},
      subTitle:  {content:'Subheading', className: 'text-white'},
    },
  },
};
