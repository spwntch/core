import { Meta, StoryObj } from '@storybook/react';
import { articles } from '../../storybook/storybook-config';
import { ArticleGrid } from './article-grid';
import { playBasic, playEmpty, playSingleArticle } from './article-grid.specs';

const componentDescription = `
### Overview
The \`ArticleGrid\` component displays a grid of article preview cards using the \`ArticleCard\` component. It supports click handling and custom styling.

### Props
- \`articles\`: An array of articles to be displayed in the grid.
- \`onClickPost\`: Function to handle click events on the articles.

### Example
\`\`\`
<ArticleGrid
  articles={[
    {
      meta: {
        slug: 'the-real-reason-you-need-an-icp',
        date: '2021-09-01',
        title: 'The Real Reason You Need an ICP',
        subtitle: "You've heard the term, but here's the real reason that not having one is holding you back.",
        coverImage: '/images/the-real-reason-you-need-an-icp.webp',
        tags: ['ICP', 'Product Strategy', 'User Experience'],
      },
    },
  ]}
  onClickPost={(slug) => console.log(\`Navigating to article: \${slug}\`)}
/>
\`\`\`
`;

const meta: Meta<typeof ArticleGrid> = {
  title: 'mdx/article-grid',
  component: ArticleGrid,
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
    articles: {
      description: 'An array of articles to be displayed in the grid',
      control: 'object',
    },
    onClickPost: {
      description: 'Function to handle click events on the articles',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleGrid>;

/**
 * Default ArticleGrid example.
 * Demonstrates a basic usage of the ArticleGrid component with articles.
 */
export const Default: Story = {
  args: {
    articles: articles,
    onClickPost: (slug) => console.log(`Navigating to article: ${slug}`),
  },
  play: playBasic,
};

/**
 * Empty ArticleGrid example.
 * Demonstrates the ArticleGrid component with no articles.
 */
export const Empty: Story = {
  args: {
    articles: [],
    onClickPost: (slug) => console.log(`Navigating to article: ${slug}`),
  },
  play: playEmpty,
};

/**
 * Single ArticleGrid example.
 * Demonstrates the ArticleGrid component with a single article.
 */
export const SingleArticle: Story = {
  args: {
    articles: articles.slice(0, 1),
    onClickPost: (slug) => console.log(`Navigating to article: ${slug}`),
  },
  play: playSingleArticle,
};

