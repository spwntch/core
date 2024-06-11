import { Meta, StoryObj } from '@storybook/react';
import { ArticleGrid } from './article-grid';

const meta: Meta<typeof ArticleGrid> = {
  title: 'mdx/article-grid',
  component: ArticleGrid,
  tags: ['autodocs'],
  argTypes: {
    articles: {
      description: 'Array of article objects',
      control: 'object',
    },
    onClickPost: {
      description: 'Function to handle click on a article',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleGrid>;

const samplePosts = [
  {
    meta: {
      slug: 'article-1',
      coverImage: '/images/furniture-1.webp',
      date: 'January 1, 2024',
      title: 'First Post',
      subtitle: 'This is the first article',
      tags: ['tag1', 'tag2'],
    },
  },
  {
    meta: {
      slug: 'article-2',
      coverImage: '/images/furniture-2.webp',
      date: 'February 1, 2024',
      title: 'Second Post',
      subtitle: 'This is the second article',
      tags: ['tag3', 'tag4'],
    },
  },
  {
    meta: {
      slug: 'article-3',
      coverImage: '/images/furniture-3.webp',
      date: 'March 1, 2024',
      title: 'Third Post',
      subtitle: 'This is the third article',
      tags: ['tag5', 'tag6'],
    },
  },
];

export const Default: Story = {
  args: {
    articles: samplePosts,
    onClickPost: (slug: string) => {
      alert(`Post clicked: ${slug}`);
    },
  },
};
