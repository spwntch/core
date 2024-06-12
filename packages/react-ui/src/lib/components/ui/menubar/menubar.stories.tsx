import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarGroup,
  MenubarSeparator,
} from './menubar';
// import { playBasic, playWithVariousItems } from './menubar.specs';

const componentDescription = `
### Overview
The \`Menubar\` component provides a flexible and customizable menu bar system.

### Props
- \`MenubarTrigger\`: The element that toggles the visibility of the menu.
- \`MenubarContent\`: The container for the menu items.
- \`MenubarItem\`: A standard item within the menu.
- \`MenubarCheckboxItem\`: An item that includes a checkbox.
- \`MenubarRadioItem\`: An item that behaves like a radio button.
- \`MenubarLabel\`: A label for grouping items within the menu.
- \`MenubarSeparator\`: A visual separator between groups of items.
- \`MenubarShortcut\`: A span element for displaying keyboard shortcuts.
- \`MenubarGroup\`: A grouping of multiple menu items.
- \`MenubarPortal\`: A portal for rendering the menu in a different part of the DOM.
- \`MenubarSub\`: A container for creating sub-menus.
- \`MenubarSubTrigger\`: The trigger for displaying sub-menus.
- \`MenubarSubContent\`: The container for sub-menu items.
- \`MenubarRadioGroup\`: A group of radio items.

### Example
\`\`\`
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarItem>Open File</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
\`\`\`
`;

const meta: Meta<typeof Menubar> = {
  title: 'ui/menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menubar>;

/**
 * Basic Menubar example.
 */
export const Basic: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open File</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  // play: playBasic,
};

/**
 * Menubar with different types of items.
 */
export const WithVariousItems: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open File</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Options</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Option 1</MenubarCheckboxItem>
          <MenubarCheckboxItem>Option 2</MenubarCheckboxItem>
          <MenubarCheckboxItem>Option 3</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
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
  // play: playWithVariousItems,
};