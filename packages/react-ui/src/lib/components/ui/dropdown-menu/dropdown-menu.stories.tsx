import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./dropdown-menu";
import { Button } from "../button/button";

const meta: Meta = {
  title: "UI/Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;

/**
 * Basic DropdownMenu with a few items.
 */
export const Basic: StoryObj = {
  render: (args) => (
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
};

/**
 * DropdownMenu with groups, labels, and separators.
 */
export const WithGroups: StoryObj = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Group 1</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Group 2</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * DropdownMenu with checkbox items.
 */
export const WithCheckboxes: StoryObj = {
  render: (args) => (
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
};

/**
 * DropdownMenu with radio items.
 */
export const WithRadios: StoryObj = {
  render: (args) => (
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
};

/**
 * DropdownMenu with submenus.
 */
export const WithSubmenus: StoryObj = {
  render: (args) => (
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
};
