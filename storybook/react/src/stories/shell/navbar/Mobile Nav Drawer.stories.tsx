import { MobileNavDrawer } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../../lib/decorators';
import { NoControlsDocs } from '../../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof MobileNavDrawer> = {
  component: MobileNavDrawer,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
};
export default meta;
type Story = StoryObj<typeof MobileNavDrawer>;

export const mobileNavDrawer: Story = {};
