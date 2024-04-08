import { RegularFooter } from '@/next-shell';
import { NoControlsDocs } from '@/react-storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { withShellProvider } from '../../../../lib/decorators';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof RegularFooter> = {
  component: RegularFooter,
  tags: ['autodocs'],
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withShellProvider],
};
export default meta;
type Story = StoryObj<typeof RegularFooter>;

export const Primary: Story = {
  name: 'Example',
};
