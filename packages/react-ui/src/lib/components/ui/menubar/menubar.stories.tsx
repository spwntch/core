import { Meta, StoryObj } from "@storybook/react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from "./menubar"

const meta: Meta<typeof Menubar> = {
  title: "UI/Components/Menubar",
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A versatile menubar component with multiple subcomponents.",
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof Menubar> = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Show Bookmarks</MenubarCheckboxItem>
            <MenubarRadioGroup value="show-tabs">
              <MenubarRadioItem value="show-tabs">Show Tabs</MenubarRadioItem>
              <MenubarRadioItem value="hide-tabs">Hide Tabs</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSub>
              <MenubarSubTrigger>More Options</MenubarSubTrigger>
              <MenubarPortal>
                <MenubarSubContent>
                  <MenubarItem>Settings</MenubarItem>
                  <MenubarItem>Help</MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
    </Menubar>
  ),
}
