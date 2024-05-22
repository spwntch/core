import { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'shad-cn-components/sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    // className: {
    //   control: 'text',
    //   description: 'Additional class names to style the component.',
    // },
    children: {
      control: 'text',
      description: 'Child elements to be rendered inside the Sheet.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

/**
 * Default Sheet component showcasing basic usage.
 */
export const Default: Story = {
  render: (args) => (
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
