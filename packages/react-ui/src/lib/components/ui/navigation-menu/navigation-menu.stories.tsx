import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./navigation-menu"

const meta: Meta<typeof NavigationMenu> = {
  title: "UI/Components/NavigationMenu",
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A versatile navigation menu component with multiple subcomponents.",
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof NavigationMenu> = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/services">Services</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  ),
}
