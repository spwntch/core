import { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';
import { playBasic, playWithTraditionalSubMenu } from './navigation-menu.specs';

const componentDescription = `
### Overview
The \`NavigationMenu\` component provides a flexible and customizable navigation menu system.

### Props
- \`NavigationMenuTrigger\`: The element that toggles the visibility of the menu content.
- \`NavigationMenuContent\`: The container for the menu content.
- \`NavigationMenuItem\`: A standard item within the menu.
- \`NavigationMenuLink\`: A link item within the menu.
- \`NavigationMenuIndicator\`: An indicator for the currently active menu item.
- \`NavigationMenuViewport\`: A viewport for displaying the menu content.

### Example
\`\`\`
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-4 flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Consulting</h3>
            <p className="text-sm text-muted-foreground">Expert advice to optimize your business operations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Implementation</h3>
            <p className="text-sm text-muted-foreground">Seamless integration and deployment services.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm text-muted-foreground">24/7 support to ensure your success.</p>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-4 flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Healthcare</h3>
            <p className="text-sm text-muted-foreground">Solutions tailored for the healthcare industry.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Finance</h3>
            <p className="text-sm text-muted-foreground">Innovative products for financial services.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-sm text-muted-foreground">Tools and services for the education sector.</p>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
\`\`\`
`;

const meta: Meta<typeof NavigationMenu> = {
  title: 'ui/navigation-menu',
  component: NavigationMenu,
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

type Story = StoryObj<typeof NavigationMenu>;

/**
 * Basic NavigationMenu example.
 */
export const Basic: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <div className="w-48">
                <h3 className="text-lg font-semibold">Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Expert advice to optimize your business operations.
                </p>
              </div>
              <div className="w-48">
                <h3 className="text-lg font-semibold">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless integration and deployment services.
                </p>
              </div>
              <div className="w-48">
                <h3 className="text-lg font-semibold">Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 support to ensure your success.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <div className="w-48">
                <h3 className="text-lg font-semibold">Healthcare</h3>
                <p className="text-sm text-muted-foreground">
                  Solutions tailored for the healthcare industry.
                </p>
              </div>
              <div className="w-48">
                <h3 className="text-lg font-semibold">Finance</h3>
                <p className="text-sm text-muted-foreground">
                  Innovative products for financial services.
                </p>
              </div>
              <div className="w-48">
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Tools and services for the education sector.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: playBasic,
};

/**
 * NavigationMenu with traditional sub-menus.
 */
export const WithTraditionalSubMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 flex flex-col space-y-2 w-48">
              <NavigationMenuLink href="#">Consulting</NavigationMenuLink>
              <NavigationMenuLink href="#">Implementation</NavigationMenuLink>
              <NavigationMenuLink href="#">Support</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 flex flex-col space-y-2 w-48">
              <NavigationMenuLink href="#">Healthcare</NavigationMenuLink>
              <NavigationMenuLink href="#">Finance</NavigationMenuLink>
              <NavigationMenuLink href="#">Education</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: playWithTraditionalSubMenu,
};
