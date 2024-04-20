import { DesktopTopNavbar } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../../lib/decorators';
import { NoControlsDocs } from '../../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof DesktopTopNavbar> = {
  component: DesktopTopNavbar,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
};
export default meta;
type Story = StoryObj<typeof DesktopTopNavbar>;

export const standard: Story = {};
export const withGithub: Story = {args: {githubUrl: 'https://github.com/spwntch'}};
