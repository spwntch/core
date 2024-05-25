import { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'ui/navigation-menu',
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
