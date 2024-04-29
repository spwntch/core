import { PostHeader } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { articles } from '../../lib/config';
import { NoControlsDocs } from '../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof PostHeader> = {
  component: PostHeader,
  parameters: { docs: { page: NoControlsDocs } },
  args: {
    backTo: { label: 'Back', path: '' },
    image: articles[0].coverImage,
    header: {
      heading: articles[0].title,
      subHeading: articles[0].subtitle,
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostHeader>;

export const postHeader: Story = {};
