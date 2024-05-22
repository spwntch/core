import { CardGrid } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFlexRowWrap } from '../../../lib/decorators';
import { BasicDocs } from '../../../lib/docs-templates';

/**
 * Custom CardGrid component built on top of the standard CardGrid from `shadcn/ui`.
 * Inherits all capabilities from the base CardGrid component, with some UX enhancements.
 */
const meta: Meta<typeof CardGrid> = {
  component: CardGrid,
  parameters: { docs: { page: BasicDocs } },
  decorators: [withFlexRowWrap],
  args: {
    cards: [
      {
        image: { src: 'images/guy-sitting-at-tech-control-station.webp' },
        content: {
          heading: 'Card Heading',
          subHeading: 'Card Subheading goes here',
        },
      },
      {
        image: { src: 'images/guy-sitting-at-tech-control-station.webp' },
        content: {
          heading: 'Card Heading',
          subHeading: 'Card Subheading goes here',
        },
      },
      {
        image: { src: 'images/guy-sitting-at-tech-control-station.webp' },
        content: {
          heading: 'Card Heading',
          subHeading: 'Card Subheading goes here',
        },
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof CardGrid>;

export const cardGrid: Story = {};
