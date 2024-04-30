import { PostHeader } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../lib/decorators';
import { NoControlsDocs } from '../../lib/docs-templates';

const meta: Meta<typeof PostHeader> = {
  component: PostHeader,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
  args: {
    backTo: { href: '/' },
    date: '2024-03-11',
    coverImage: 'blog/images/the-real-reason-you-need-an-icp.webp',
    title: 'The Real Reason You Need an ICP',
    subtitle: 'Unveiling the Keystone of Business Success',
    tags: ['Customer Experience', 'Business Strategy', 'Smarketing'],
    onBackTo: (href: string) => console.log('back to', href),
  },
};

export default meta;
type Story = StoryObj<typeof PostHeader>;

export const postHeader: Story = {};
