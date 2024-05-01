import { PostCard } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../lib/decorators';
import { NoControlsDocs } from '../../lib/docs-templates';

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
  args: {
    date: '2024-03-11',
    coverImage: 'blog/images/the-real-reason-you-need-an-icp.webp',
    title: 'The Real Reason You Need an ICP',
    subtitle: 'Unveiling the Keystone of Business Success',
    tags: ['Customer Experience', 'Business Strategy', 'Smarketing'],
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const postCard: Story = {};
