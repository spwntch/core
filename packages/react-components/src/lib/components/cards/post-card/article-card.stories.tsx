import { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './article-card';

const meta: Meta<typeof ArticleCard> = {
  title: 'components/cards/article-card',
  component: ArticleCard,
  tags: ['autodocs'],
  argTypes: {
    slug: {
      description: 'Slug for the article',
      control: 'text',
    },
    coverImage: {
      description: 'Cover image URL for the article',
      control: 'text',
    },
    date: {
      description: 'Publication date of the article',
      control: 'text',
    },
    title: {
      description: 'Title of the article',
      control: 'text',
    },
    subtitle: {
      description: 'Subtitle of the article',
      control: 'text',
    },
    tags: {
      description: 'Tags associated with the article',
    },
    onClick: {
      description: 'Function to handle click on the article',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    slug: 'example-article',
    coverImage: '/images/furniture-6.webp',
    date: 'June 10, 2024',
    title: 'Example Post Title',
    subtitle: 'This is an example of a article subtitle.',
    tags: ['Example', 'Storybook'],
    onClick: (slug: string) => {
      alert(`Post clicked: ${slug}`);
    },
  },
};
