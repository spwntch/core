import { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './post-card';

const meta: Meta<typeof PostCard> = {
  title: 'components/cards/post-card',
  component: PostCard,
  tags: ['autodocs'],
  argTypes: {
    slug: {
      description: 'Slug for the post',
      control: 'text',
    },
    coverImage: {
      description: 'Cover image URL for the post',
      control: 'text',
    },
    date: {
      description: 'Publication date of the post',
      control: 'text',
    },
    title: {
      description: 'Title of the post',
      control: 'text',
    },
    subtitle: {
      description: 'Subtitle of the post',
      control: 'text',
    },
    tags: {
      description: 'Tags associated with the post',
    },
    onClick: {
      description: 'Function to handle click on the post',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    slug: 'example-post',
    coverImage: '/images/furniture-6.webp',
    date: 'June 10, 2024',
    title: 'Example Post Title',
    subtitle: 'This is an example of a post subtitle.',
    tags: ['Example', 'Storybook'],
    onClick: (slug: string) => {
      alert(`Post clicked: ${slug}`);
    },
  },
};
