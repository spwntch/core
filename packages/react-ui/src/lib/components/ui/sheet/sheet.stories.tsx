import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Components/Sheet',
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
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Sheet description goes here. Add relevant details and information.
          </SheetDescription>
        </SheetHeader>
        <div>Sheet content goes here. Add your components and elements.</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
          <Button variant="default">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
