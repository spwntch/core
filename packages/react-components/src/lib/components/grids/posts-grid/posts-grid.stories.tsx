import { Meta, StoryObj } from '@storybook/react';
import { PostsGrid } from './posts-grid';

const meta: Meta<typeof PostsGrid> = {
  title: 'components/grids/posts-grid',
  component: PostsGrid,
  tags: ['autodocs'],
  argTypes: {
    posts: {
      description: 'Array of post objects',
      control: 'object',
    },
    onClickPost: {
      description: 'Function to handle click on a post',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostsGrid>;

const samplePosts = [
  {
    meta: {
      slug: 'post-1',
      coverImage: '/images/furniture-1.webp',
      date: 'January 1, 2024',
      title: 'First Post',
      subtitle: 'This is the first post',
      tags: ['tag1', 'tag2'],
    },
  },
  {
    meta: {
      slug: 'post-2',
      coverImage: '/images/furniture-2.webp',
      date: 'February 1, 2024',
      title: 'Second Post',
      subtitle: 'This is the second post',
      tags: ['tag3', 'tag4'],
    },
  },
  {
    meta: {
      slug: 'post-3',
      coverImage: '/images/furniture-3.webp',
      date: 'March 1, 2024',
      title: 'Third Post',
      subtitle: 'This is the third post',
      tags: ['tag5', 'tag6'],
    },
  },
];

export const Default: Story = {
  args: {
    posts: samplePosts,
    onClickPost: (slug: string) => {
      alert(`Post clicked: ${slug}`);
    },
  },
};
