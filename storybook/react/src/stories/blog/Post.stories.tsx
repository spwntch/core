import { Post } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../lib/decorators';
import { NoControlsDocs } from '../../lib/docs-templates';
import { H1, H2, P, Small } from '@/react-components';

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
      <div className='flex flex-col gap-8'>
        <header className='flex flex-col gap-2'>
          <H1>My Fake Blog Post</H1>
          <Small>By John Doe</Small>
          <Small>May 1, 2024</Small>
        </header>
        <article>
          <H2>Welcome to My Blog</H2>
          <P>
            This is a <strong>fake blog post</strong> used to demonstrate basic
            HTML structure. It doesn't contain real content but shows how you
            might structure a blog post with HTML.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pellentesque sem at felis blandit, vitae lobortis dolor
            sollicitudin. Fusce non nisl orci. Nulla facilisi. Donec molestie,
            mauris id vehicula lacinia, arcu orci posuere dolor, a faucibus
            libero tellus non tellus.
          </P>
        </article>
        <footer>
          <P>Copyright © 2024 John Doe</P>
        </footer>
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
