import { Mark } from '@/next-shell';
import { BasicDocs } from '@/react-storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { withBrandProvider } from '../../../../lib/decorators';


/**
 * Renders a 1:1 asepct ratio logo mark. Adjusting the `width` to make it bigger or smaller also sets the height to the same value.
 */
const meta: Meta<typeof Mark> = {
  component: Mark,
  tags: ['autodocs'],
  parameters: { docs: { page: BasicDocs } },
};
export default meta;
type Story = StoryObj<typeof Mark>;

export const Primary: Story = {
  decorators: [withBrandProvider],
  name: 'In Light Mode',
};

export const Dark: Story = {
  name: 'In Dark Mode',
  decorators: [withBrandProvider],
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
