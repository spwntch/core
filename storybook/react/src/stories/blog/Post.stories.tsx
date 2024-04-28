import { Post } from '@/react-blog';
import type { Meta, StoryObj } from '@storybook/react';
import { NoControlsDocs } from '../../lib/docs-templates';
import { withFullPage } from '../../lib/decorators';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof Post> = {
  component: Post,
  decorators: [withFullPage],
  parameters: { docs: { page: NoControlsDocs } },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Post>;

export const post: Story = {};
