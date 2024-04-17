import { Mark } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withBrandProvider } from '../../../lib/decorators';
import { BasicDocs } from '../../../lib/docs-templates';

/**
 * Renders a 1:1 asepct ratio logo mark. Adjusting the `width` to make it bigger or smaller also sets the height to the same value.
 */
const meta: Meta<typeof Mark> = {
  component: Mark,
  parameters: { docs: { page: BasicDocs } },
  decorators: [withBrandProvider],
};
export default meta;
type Story = StoryObj<typeof Mark>;

export const mark: Story = {};
