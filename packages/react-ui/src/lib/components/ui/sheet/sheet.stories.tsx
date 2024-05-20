import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./sheet"

const meta: Meta<typeof Sheet> = {
  title: "UI/Components/Sheet",
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A versatile sheet component with multiple subcomponents.",
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof Sheet> = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is the description for the sheet.</SheetDescription>
        </SheetHeader>
        <div>
          <p>Sheet content goes here.</p>
        </div>
        <SheetFooter>
          <button>Cancel</button>
          <button>Confirm</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
