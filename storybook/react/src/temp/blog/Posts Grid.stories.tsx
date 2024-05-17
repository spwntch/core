import { PostsGrid } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../lib/decorators';
import { NoControlsDocs } from '../../lib/docs-templates';

const meta: Meta<typeof PostsGrid> = {
  component: PostsGrid,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
  args: {
    posts: [
      {
        meta: {
          slug: 'the-real-reason-you-need-an-icp',
          date: '2024-03-11',
          coverImage: 'blog/images/the-real-reason-you-need-an-icp.webp',
          title: 'The Real Reason You Need an ICP',
          subtitle: 'Unveiling the Keystone of Business Success',
          tags: ['CX', 'Strategy', 'Smarketing'],
        },
      },
      {
        meta: {
          slug: 'the-real-reason-you-need-an-icp',
          date: '2024-03-11',
          coverImage: 'blog/images/the-real-reason-you-need-an-icp.webp',
          title: 'The Real Reason You Need an ICP',
          subtitle: 'Unveiling the Keystone of Business Success',
          tags: ['CX', 'Strategy', 'Smarketing'],
        },
      },
      {
        meta: {
          slug: 'the-real-reason-you-need-an-icp',
          date: '2024-03-11',
          coverImage: 'blog/images/the-real-reason-you-need-an-icp.webp',
          title: 'The Real Reason You Need an ICP',
          subtitle: 'Unveiling the Keystone of Business Success',
          tags: ['CX', 'Strategy', 'Smarketing'],
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof PostsGrid>;

export const postsGrid: Story = {};
