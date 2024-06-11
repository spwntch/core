import { Meta, StoryObj } from '@storybook/react';
import { ArticleHeader } from './article-header';
import { playBasic, playWithBackButton } from './article-header.specs';
import { articles } from '../../storybook/storybook-config';
import { withFullWidth } from '../../storybook/storybook-decorators';

const componentDescription = `
### Overview
The \`ArticleHeader\` component displays the header section of an article, including a back button, cover image, title, subtitle, and tags.

### Props
- \`backTo\`: An optional object containing \`label\` and \`href\` properties for the back button.
- \`onBackTo\`: A function to handle the back button click event.
- \`slug\`: The unique identifier for the article.
- \`coverImage\`: The URL of the cover image.
- \`date\`: The publication date of the article.
- \`title\`: The title of the article.
- \`subtitle\`: The subtitle of the article.
- \`tags\`: An array of tags associated with the article.
- \`hAlign\`: Horizontal alignment of the content.
- \`vAlign\`: Vertical alignment of the content.

### Example
\`\`\`
<ArticleHeader
  backTo={{ label: 'Back to Articles', href: '/articles' }}
  onBackTo={(href) => console.log(\`Navigating to: \${href}\`)}
  title="The Real Reason You Need an ICP"
  subtitle="You've heard the term, but here's the real reason that not having one is holding you back."
  coverImage="/images/the-real-reason-you-need-an-icp.webp"
  tags={['ICP', 'Product Strategy', 'User Experience']}
  hAlign="center"
  vAlign="middle"
/>
\`\`\`
`;

const meta: Meta<typeof ArticleHeader> = {
  title: 'mdx/article-header',
  component: ArticleHeader,
  decorators: [withFullWidth],
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
    backTo: {
      description: 'An optional object containing `label` and `href` properties for the back button',
      control: 'object',
    },
    onBackTo: {
      description: 'Function to handle the back button click event',
      action: 'clicked',
    },
    title: {
      description: 'The title of the article',
      control: 'text',
    },
    subtitle: {
      description: 'The subtitle of the article',
      control: 'text',
    },
    coverImage: {
      description: 'The URL of the cover image',
      control: 'text',
    },
    tags: {
      description: 'An array of tags associated with the article',
      control: 'object',
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleHeader>;

/**
 * Default ArticleHeader example.
 * Demonstrates a basic usage of the ArticleHeader component.
 */
export const Default: Story = {
  args: {
    title: articles[0].meta.title,
    subtitle: articles[0].meta.subtitle,
    coverImage: articles[0].meta.coverImage,
    tags: articles[0].meta.tags,
  },
  play: playBasic,
};

/**
 * ArticleHeader with Back Button example.
 * Demonstrates the ArticleHeader component with a back button.
 */
export const WithBackButton: Story = {
  args: {
    backTo: { label: 'Back to Articles', href: '/articles' },
    onBackTo: (href) => console.log(`Navigating to: ${href}`),
    title: articles[0].meta.title,
    subtitle: articles[0].meta.subtitle,
    coverImage: articles[0].meta.coverImage,
    tags: articles[0].meta.tags,
  },
  play: playWithBackButton,
};

/**
 * Left Aligned Content.
 * Demonstrates the ArticleHeader component with left aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    title: articles[1].meta.title,
    subtitle: articles[1].meta.subtitle,
    coverImage: articles[1].meta.coverImage,
    tags: articles[1].meta.tags,
    hAlign: 'left',
    vAlign: 'top',
  },
  play: playBasic,
};

/**
 * Right Aligned Content.
 * Demonstrates the ArticleHeader component with right aligned text content.
 */
export const RightAligned: Story = {
  args: {
    title: articles[2].meta.title,
    subtitle: articles[2].meta.subtitle,
    coverImage: articles[2].meta.coverImage,
    tags: articles[2].meta.tags,
    hAlign: 'right',
    vAlign: 'bottom',
  },
  play: playBasic,
};

