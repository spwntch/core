import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/Components/NavigationMenu',
  component: NavigationMenu,
  args: {
    children: 'Click Me',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const basic: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
