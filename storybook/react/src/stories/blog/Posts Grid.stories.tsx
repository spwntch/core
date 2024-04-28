import { PostsGrid } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { articles } from '../../lib/config';
import { NoControlsDocs } from '../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof PostsGrid> = {
  component: PostsGrid,
  parameters: { docs: { page: NoControlsDocs } },
  args: {
    posts: articles,
  },
};

export default meta;
type Story = StoryObj<typeof PostsGrid>;

export const postsGrid: Story = {};
