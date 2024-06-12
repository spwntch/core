import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuSeparator
} from './dropdown-menu';
import { Button } from '../button/button';
// import { playBasic, playWithGroups, playWithCheckboxes, playWithRadios, playWithSubmenus } from './dropdown-menu.specs';

const componentDescription = `
### Overview
The \`DropdownMenu\` component provides a flexible and customizable dropdown menu system.

### Props
- \`DropdownMenuTrigger\`: The element that toggles the visibility of the dropdown menu.
- \`DropdownMenuContent\`: The container for the dropdown menu items.
- \`DropdownMenuItem\`: A standard item within the dropdown menu.
- \`DropdownMenuCheckboxItem\`: An item that includes a checkbox.
- \`DropdownMenuRadioItem\`: An item that behaves like a radio button.
- \`DropdownMenuLabel\`: A label for grouping items within the dropdown.
- \`DropdownMenuSeparator\`: A visual separator between groups of items.
- \`DropdownMenuShortcut\`: A span element for displaying keyboard shortcuts.
- \`DropdownMenuGroup\`: A grouping of multiple dropdown items.
- \`DropdownMenuPortal\`: A portal for rendering the dropdown menu in a different part of the DOM.
- \`DropdownMenuSub\`: A container for creating sub-menus.
- \`DropdownMenuSubTrigger\`: The trigger for displaying sub-menus.
- \`DropdownMenuSubContent\`: The container for sub-menu items.
- \`DropdownMenuRadioGroup\`: A group of radio items.

### Example
\`\`\`
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
    <DropdownMenuItem>Item 3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`
`;

const meta: Meta<typeof DropdownMenu> = {
  title: 'ui/dropdown-menu',
  component: DropdownMenu,
  // subcomponents: {
  //   DropdownMenuTrigger,
  //   DropdownMenuContent,
  //   DropdownMenuItem,
  //   DropdownMenuCheckboxItem,
  //   DropdownMenuRadioGroup,
  //   DropdownMenuRadioItem,
  //   DropdownMenuSub,
  //   DropdownMenuSubTrigger,
  //   DropdownMenuSubContent,
  //   DropdownMenuGroup,
  //   DropdownMenuSeparator
  // },
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

type Story = StoryObj<typeof DropdownMenu>;

/**
 * Basic DropdownMenu example.
 */
export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  // play: playBasic,
};

/**
 * DropdownMenu with grouped items.
 */
export const WithGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Group Item 1</DropdownMenuItem>
          <DropdownMenuItem>Group Item 2</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Group Item 3</DropdownMenuItem>
          <DropdownMenuItem>Group Item 4</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  // play: playWithGroups,
};

/**
 * DropdownMenu with checkbox items.
 */
export const WithCheckboxes: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked>Item 1</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Item 2</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Item 3</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  // play: playWithCheckboxes,
};

/**
 * DropdownMenu with radio items.
 */
export const WithRadios: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value="item1">
          <DropdownMenuRadioItem value="item1">Item 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="item2">Item 2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="item3">Item 3</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  // play: playWithRadios,
};

/**
 * DropdownMenu with submenus.
 */
export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
            <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  // play: playWithSubmenus,
};