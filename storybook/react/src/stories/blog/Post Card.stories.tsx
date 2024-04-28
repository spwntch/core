import { PostCard } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../lib/decorators';
import { NoControlsDocs } from '../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof PostCard> = {
  component: PostCard,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
  args: {
    coverImage: { src: 'images/guy-sitting-at-tech-control-station.webp' },
    title: 'Post Title',
    subtitle: 'Post Subtitle',
    meta: {
      slug: 'slug',
      categories: ['Category'],
      keywords: ['Keyword'],
      author: {
        name: 'Author Name',
        avatarUrl: 'Author Avatar Url',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const postCard: Story = {};
