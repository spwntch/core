import { Tagline } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withBrandProvider } from '../../../lib/decorators';
import { BasicDocs } from '../../../lib/docs-templates';

/**
 * Renders a wide Tagline, with a default aspect ratio of 4:1. Adjust the `width` to make it bigger or smaller whilst keeping the same aspect ratio, or use `width` and `height` together to set you own size.
 */
const meta: Meta<typeof Tagline> = {
  component: Tagline,
  // tags: ['autodocs'],
  parameters: { docs: { page: BasicDocs } },
  decorators: [withBrandProvider],
};
export default meta;
type Story = StoryObj<typeof Tagline>;

export const tagline: Story = {
};

