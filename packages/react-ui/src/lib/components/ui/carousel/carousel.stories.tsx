import { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import { playBasic } from './carousel.specs';
import { withFullPage } from '../../../utils';

const componentDescription = `
### Overview
The \`Carousel\` component provides a sliding carousel for displaying content.

### Props
- \`images\`: An array of image URLs to display in the carousel.

### Example
\`\`\`
<Carousel>
  <CarouselContent>
    <CarouselItem>Content 1</CarouselItem>
    <CarouselItem>Content 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
\`\`\`

### Notes
This component is used to create a sliding image carousel.
`;

const meta: Meta = {
  title: 'ui/carousel',
  component: Carousel,
  decorators: [withFullPage],
  // subcomponents: { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious },
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

/**
 * ### Basic Example
 * Displays a carousel with a set of images.
 */
export const basic: Story = {
  args: {
    className: 'max-w-3xl mx-auto',
    children: (
      <CarouselContent>
        <CarouselItem>
          <img src="/images/landscape-1.webp" alt="Landscape Image 1" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-2.webp" alt="Landscape Image 2" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-3.webp" alt="Landscape Image 3" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-4.webp" alt="Landscape Image 4" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-5.webp" alt="Landscape Image 5" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-6.webp" alt="Landscape Image 6" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-7.webp" alt="Landscape Image 7" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/landscape-8.webp" alt="Landscape Image 8" />
        </CarouselItem>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselContent>
    ),
  },
  play: playBasic,
};
