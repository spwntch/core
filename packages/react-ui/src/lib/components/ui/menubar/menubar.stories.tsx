import { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from "./menubar";

const meta: Meta<typeof Menubar> = {
  title: "ui/components/menubar",
  component: Menubar,
  tags: ["autodocs"],
};

export default meta;

/**
 * Basic Menubar example with a few items.
 */
export const Basic: StoryObj<typeof Menubar> = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open File</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

/**
 * Menubar example with checkbox items.
 */
export const WithCheckboxes: StoryObj<typeof Menubar> = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>Options</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Option 1</MenubarCheckboxItem>
          <MenubarCheckboxItem>Option 2</MenubarCheckboxItem>
          <MenubarCheckboxItem>Option 3</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

/**
 * Menubar example with radio items.
 */
export const WithRadios: StoryObj<typeof Menubar> = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="view1">
            <MenubarRadioItem value="view1">View 1</MenubarRadioItem>
            <MenubarRadioItem value="view2">View 2</MenubarRadioItem>
            <MenubarRadioItem value="view3">View 3</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

/**
 * Menubar example with submenus.
 */
export const WithSubmenus: StoryObj<typeof Menubar> = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Tool 1</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>More Tools</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Tool 2</MenubarItem>
              <MenubarItem>Tool 3</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>Tool 4</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
