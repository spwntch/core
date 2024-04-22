import { NavigationMenu, NavigationMenuList } from '@spwntch/components';
import {
  INavItem,
  INavLink,
  INavMenu,
  useNav,
} from '../../../providers/nav-provider';
import { NavToolbarMenu } from './nav-toolbar-menu';
import { NavToolbarLink } from './nav-toolbar-link';

export interface ITopNavProps {
  /**
   * An array of navigation items. Use this if you want to override the navigation items from the `NavProvider`
   */
  items?: INavItem[];
}

export const NavToolbar = ({ items }: ITopNavProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    if ((item as INavMenu).children)
      return (
        <NavToolbarMenu
          key={(item as INavMenu).label || ''}
          {...(item as INavMenu)}
        />
      );
    return (
      <NavToolbarLink
        key={(item as INavLink).href || ''}
        {...(item as INavLink)}
        onSelect={(e) => console.log(e)}
      />
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => pickNavItem(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
