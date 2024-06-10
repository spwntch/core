import { Meta, StoryObj } from '@storybook/react';
import { MdxArticleHeader } from './mdx-article-header';

const meta: Meta<typeof MdxArticleHeader> = {
  title: 'mdx/mdx-article-header',
  component: MdxArticleHeader,
  tags: ['autodocs'],
  argTypes: {
    backTo: {
      description: 'Back to navigation link',
      control: 'object',
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
    coverImage: {
      description: 'Cover image URL for the post',
      control: 'text',
    },
    onBackTo: {
      description: 'Function to handle back navigation',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MdxArticleHeader>;

export const Default: Story = {
  args: {
    backTo: { label: 'Back to Home', href: '/' },
    title: 'Sample Post Title',
    subtitle: 'Sample Post Subtitle',
    tags: ['Tag1', 'Tag2'],
    coverImage: '/images/sample-cover.jpg',
    onBackTo: (href: string) => {
      alert(`Back to: ${href}`);
    },
  },
};
