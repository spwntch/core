import { GridCard } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFlexRowWrap } from '../../../lib/decorators';
import { BasicDocs } from '../../../lib/docs-templates';

const meta: Meta<typeof GridCard> = {
  component: GridCard,
  parameters: { docs: { page: BasicDocs } },
  decorators: [withFlexRowWrap],
  args: {
    image: { src: 'images/guy-sitting-at-tech-control-station.webp' },
    content: {
      heading: 'Card Heading',
      subHeading: 'Card Subheading goes here',
    },
  },
};
export default meta;
type Story = StoryObj<typeof GridCard>;

export const gridCard: Story = {};
