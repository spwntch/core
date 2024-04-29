import { Posts } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { articles } from '../../lib/config';
import { NoControlsDocs } from '../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof Posts> = {
  component: Posts,
  parameters: { docs: { page: NoControlsDocs } },
  args: {
    header: {
      heading: 'My Outstanding Posts',
      subHeading: `Insight into my mind, aren't you excited!!!!`,
      body: 'blah, blah, blah.... blah, blah blah....',
    },
    posts: articles,
  },
};

export default meta;
type Story = StoryObj<typeof Posts>;

export const posts: Story = {};
