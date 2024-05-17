import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

const meta: Meta<typeof ResizablePanel> = {
  component: ResizablePanel,
  decorators: [withFullPage],
  args: {
    children: 'Click Me',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ResizablePanel>;

export const resizable: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  ),
};
