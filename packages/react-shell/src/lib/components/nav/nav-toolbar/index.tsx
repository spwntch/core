import { NavigationMenu, NavigationMenuList } from '@spwntch/components';
import { INavItem, INavLink, useNav } from '../../../providers/nav-provider';
import { NavToolbarLink } from './nav-toolbar-link';

export interface ITopNavProps {
  /**
   * An array of navigation items. Use this if you want to override the navigation items from the `NavProvider`
   */
  items?: INavItem[];

  onLinkTo: (href: string) => void;
}

export const NavToolbar = ({ items, onLinkTo }: ITopNavProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    // if ((item as INavMenu).children)
    //   return (
    //     <NavToolbarMenu
    //       key={(item as INavMenu).label || ''}
    //       {...(item as INavMenu)}
    //     />
    //   );
    return (
      <NavToolbarLink
        key={(item as INavLink).href || ''}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
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
