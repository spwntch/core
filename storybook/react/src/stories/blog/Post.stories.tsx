import { Post } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { NoControlsDocs } from '../../lib/docs-templates';
import { withFullPage } from '../../lib/decorators';
import { articles } from '../../lib/config';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof Post> = {
  component: Post,
  decorators: [withFullPage],
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
type Story = StoryObj<typeof Post>;

export const post: Story = {};
