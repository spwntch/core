import { Post } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../lib/decorators';
import { NoControlsDocs } from '../../lib/docs-templates';
import { H1 } from '@/react-components';

const meta: Meta<typeof Post> = {
  component: Post,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
  args: {
    meta: {
      slug: 'the-real-reason-you-need-an-icp.webp',
      date: '2024-03-11',
      coverImage: 'blog/images/the-real-reason-you-need-an-icp.webp',
      title: 'The Real Reason You Need an ICP',
      subtitle: 'Unveiling the Keystone of Business Success',
      tags: ['Customer Experience', 'Business Strategy', 'Smarketing'],
    },
    content: (
      <div>
        <H1>Blog article goes here.</H1>
        <div className="mt-20">
          <p>ipsum lorem </p>
        </div>
      </div>
    ),
    toc: [
      { label: 'ping', href: '#ping' },
      { label: 'pong', href: '#pong' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const post: Story = {};
