import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  args: {
    children: 'Click Me',
  },
  // tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const sheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
