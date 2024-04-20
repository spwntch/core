import { GithubButton } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../../lib/decorators';
import { NoControlsDocs } from '../../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof GithubButton> = {
  component: GithubButton,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
  args: {
    url: 'https://github.com/spwntch'
  }
};
export default meta;
type Story = StoryObj<typeof GithubButton>;

export const githubButton: Story = {};
