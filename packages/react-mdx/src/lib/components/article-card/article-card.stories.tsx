import { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './article-card';
import { articles } from '../../storybook/storybook-config';
import { playBasic, playNoTags } from './article-card.specs';

const componentDescription = `
### Overview
The \`ArticleCard\` component displays an article preview card with a cover image, title, subtitle, date, and tags. It supports click handling and custom styling.

### Props
- \`slug\`: The unique identifier for the article.
- \`coverImage\`: The URL of the cover image.
- \`date\`: The publication date of the article.
- \`title\`: The title of the article.
- \`subtitle\`: The subtitle of the article.
- \`tags\`: An array of tags associated with the article.
- \`onClick\`: Function to handle click events on the card.
- \`className\`: Additional class name(s) for the card.

### Example
\`\`\`
<ArticleCard
  slug="the-real-reason-you-need-an-icp"
  coverImage="/images/the-real-reason-you-need-an-icp.webp"
  date="2021-09-01"
  title="The Real Reason You Need an ICP"
  subtitle="You've heard the term, but here's the real reason that not having one is holding you back."
  tags={['ICP', 'Product Strategy', 'User Experience']}
  onClick={(slug) => console.log(\`Navigating to article: \${slug}\`)}
  className="my-custom-class"
/>
\`\`\`
`;

const meta: Meta<typeof ArticleCard> = {
  title: 'mdx/article-card',
  component: ArticleCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    slug: {
      description: 'The unique identifier for the article',
      control: 'text',
    },
    coverImage: {
      description: 'The URL of the cover image',
      control: 'text',
    },
    date: {
      description: 'The publication date of the article',
      control: 'text',
    },
    title: {
      description: 'The title of the article',
      control: 'text',
    },
    subtitle: {
      description: 'The subtitle of the article',
      control: 'text',
    },
    tags: {
      description: 'An array of tags associated with the article',
    },
    onClick: {
      description: 'Function to handle click events on the card',
      action: 'clicked',
    },
    className: {
      description: 'Additional class name(s) for the card',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

/**
 * Default ArticleCard example.
 * Demonstrates a basic usage of the ArticleCard component.
 */
export const Default: Story = {
  args: {
    ...articles[0].meta,
    onClick: (slug) => console.log(`Navigating to article: ${slug}`),
    className: 'my-custom-class',
  },
  play: playBasic,
};

/**
 * No Tags ArticleCard example.
 * Demonstrates an ArticleCard component without any tags.
 */
export const NoTags: Story = {
  args: {
    ...articles[0].meta,
    tags: undefined,
    onClick: (slug) => console.log(`Navigating to article: ${slug}`),
    className: 'my-custom-class',
  },
  play: playNoTags,
};

/**
 * No Subtitle ArticleCard example.
 * Demonstrates an ArticleCard component without a subtitle.
 */
export const NoSubtitle: Story = {
  args: {
    ...articles[0].meta,
    subtitle: '',
    onClick: (slug) => console.log(`Navigating to article: ${slug}`),
    className: 'my-custom-class',
  },
  play: playNoTags,
};

/**
 * No Date ArticleCard example.
 * Demonstrates an ArticleCard component without a date.
 */
export const NoDate: Story = {
  args: {
    ...articles[0].meta,
    date: '',
    onClick: (slug) => console.log(`Navigating to article: ${slug}`),
    className: 'my-custom-class',
  },
  play: playNoTags,
};
