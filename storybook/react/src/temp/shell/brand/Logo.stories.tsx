import { Logo } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withBrandProvider } from '../../../lib/decorators';
import { BasicDocs } from '../../../lib/docs-templates';

/**
 * Renders a wide logo, with a default aspect ratio of 4:1. Adjust the `width` to make it bigger or smaller whilst keeping the same aspect ratio, or use `width` and `height` together to set you own size.
 */
const meta: Meta<typeof Logo> = {
  component: Logo,
  parameters: { docs: { page: BasicDocs } },
  decorators: [withBrandProvider],
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const logo: Story = {
};
