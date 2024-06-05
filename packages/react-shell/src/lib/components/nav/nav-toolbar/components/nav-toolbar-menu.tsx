import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/react-ui';
import { NavToolbarMenuLink } from './nav-toolbar-menu-link';
import { INavLink, INavMenu } from '../../../../providers/nav-provider';

interface ITopNavMenuProps extends INavMenu {
  onLinkTo: (href: string) => void;
}

export const NavToolbarMenu = ({
  label,
  onLinkTo,
  children,
}: ITopNavMenuProps) => {
  const pickMenuItem = (item: INavMenu) => {
    // ONLY IF WE HAVE SUBMENU...
    // FOR NOW, WE DON'T...
    // if ((item as INavMenu).children) {
    //  ...
    // }

    return (
      <NavToolbarMenuLink
        key={(item as INavLink).href}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
      />
    );
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label} </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {children?.map((item) => pickMenuItem(item))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
