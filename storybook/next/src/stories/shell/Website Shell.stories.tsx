import { WebsiteShell } from '@/next-shell';
import { BasicDocs, withShellProvider } from '@/react-storybook';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WebsiteShell> = {
  component: WebsiteShell,
  parameters: { docs: { page: BasicDocs } },
  decorators: [withShellProvider],
  args: {
    // children: <UnderConstruction />,
  },
};
export default meta;
type Story = StoryObj<typeof WebsiteShell>;

export const websiteShell: Story = {};
