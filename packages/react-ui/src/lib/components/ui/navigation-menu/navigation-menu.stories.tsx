import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport } from "./navigation-menu";
import { ChevronDown } from "lucide-react";

const meta: Meta<typeof NavigationMenu> = {
  title: "UI/Components/NavigationMenu",
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names to style the component.',
    },
    children: {
      control: 'text',
      description: 'Child elements to be rendered inside the NavigationMenu.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

/**
 * Default NavigationMenu component showcasing basic usage.
 */
export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Menu
            <ChevronDown />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
