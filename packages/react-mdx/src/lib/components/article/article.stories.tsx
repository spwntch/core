import { Meta, StoryObj } from '@storybook/react';
import { Article } from './article';

const meta: Meta<typeof Article> = {
  title: 'mdx/article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    backTo: {
      description: 'Back to navigation link',
      control: 'object',
    },
    meta: {
      description: 'Metadata for the post',
      control: 'object',
    },
    toc: {
      description: 'Table of contents',
      //   control: 'array',
    },
    content: {
      description: 'Content of the post',
      control: 'text',
    },
    onBackTo: {
      description: 'Function to handle back navigation',
      action: 'clicked',
    },
    onToc: {
      description: 'Function to handle TOC click',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: {
    backTo: { label: 'Back to Home', href: '/' },
    // meta: {
    //   title: 'Sample Post Title',
    //   date: 'June 11, 2024',
    // },
    toc: [
      { label: 'Introduction', href: '#introduction' },
      { label: 'Conclusion', href: '#conclusion' },
    ],
    // content: '<p>This is the content of the post.</p>',
    onBackTo: (href: string) => {
      alert(`Back to: ${href}`);
    },
    onToc: (href: string) => {
      alert(`Navigate to: ${href}`);
    },
  },
};
