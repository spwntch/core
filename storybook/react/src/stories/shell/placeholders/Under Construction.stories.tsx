import { Code } from '@/react-components';
import { UnderConstruction } from '@/react-shell';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';
import { NoControlsDocs } from '../../../lib/docs-templates';

/**
 * Renders a site footer component.
 */
const meta: Meta<typeof UnderConstruction> = {
  component: UnderConstruction,
  parameters: { docs: { page: NoControlsDocs } },
  decorators: [withFullPage],
  args: {
    children: (
      <div className="text-center">
        Add more content here via <Code>children</Code>
      </div>
    ),
  },
};
export default meta;
type Story = StoryObj<typeof UnderConstruction>;

export const underConstruction: Story = {};
