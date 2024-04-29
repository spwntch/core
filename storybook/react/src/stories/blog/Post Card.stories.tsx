import { PostCard } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { articles } from '../../lib/config';
import { NoControlsDocs } from '../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof PostCard> = {
  component: PostCard,
  parameters: { docs: { page: NoControlsDocs } },
  args: {
    coverImage: articles[0].coverImage,
    title: articles[0].title,
    subtitle: articles[0].subtitle,
    meta: articles[0].meta,
   
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const postCard: Story = {};
