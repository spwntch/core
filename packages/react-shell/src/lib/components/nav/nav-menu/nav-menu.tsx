import { NavigationMenu, NavigationMenuList } from '@/react-ui';
import {
  INavItem,
  INavLink,
  INavMenu,
  useNav,
} from '../nav-provider/nav-provider';
import { NavMenuLink } from './components/nav-menu-link';
import { NavSubMenu } from './components/nav-sub-menu';
// import { NavMenuItem } from './nav-item';

export interface INavMenuProps {
  /**
   * An array of navigation items. Use this if you want to override the navigation items from the `NavProvider`
   */
  items?: INavItem[];
  omitHome?: boolean;
  onLinkTo: (href: string) => void;
}

export const NavMenu = ({
  items,
  // omitHome = false,
  onLinkTo,
}: INavMenuProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    if ((item as INavMenu).children) {
      return (
        <NavSubMenu
          key={(item as INavMenu).label || ''}
          {...(item as INavMenu)}
          onLinkTo={onLinkTo}
        />
      );
    }
    return (
      <NavMenuLink
        key={(item as INavLink).href || ''}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
      />
    );
  };

  return (
    <NavigationMenu
      orientation="vertical"
      className="pl-1 max-w-none justify-start"
    >
      <NavigationMenuList className="flex-col max-w-none w-[210px] ">
        {items.map((item) => pickNavItem(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
