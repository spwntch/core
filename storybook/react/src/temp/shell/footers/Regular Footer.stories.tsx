import { RegularFooter } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../../lib/decorators';
import { NoControlsDocs } from '../../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof RegularFooter> = {
  component: RegularFooter,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
};
export default meta;
type Story = StoryObj<typeof RegularFooter>;

export const regularFooter: Story = {
};
