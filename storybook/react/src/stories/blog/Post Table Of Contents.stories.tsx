import { PostToc } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { NoControlsDocs } from '../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof PostToc> = {
  component: PostToc,
  parameters: { docs: { page: NoControlsDocs } },
  args: {},
};

export default meta;
type Story = StoryObj<typeof PostToc>;

export const postTableOfContents: Story = {};
