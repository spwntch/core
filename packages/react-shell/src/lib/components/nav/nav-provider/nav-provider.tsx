import { usePathname } from 'next/navigation';
import { PropsWithChildren, createContext, useContext } from 'react';
/**
 * Represents a navigation menu in the UI library.
 * A navigation menu can contain multiple child navigation items.
 */
export interface INavMenu {
  /**
   * The label of the navigation item.
   */
  label: string;
  /**
   * The child navigation items of the navigation menu.
   */
  onSelect?: (event: Event) => void;
  children?: INavItem[];
}

/**
 * Represents a navigation link in the UI library.
 * A navigation link is a clickable item that navigates to a specific URL.
 */
export interface INavLink {
  /**
   * The label of the navigation item.
   */
  label: string;
  description?: string;
  /**
   * The URL of the navigation link.
   */
  href: string;

  /**
   * Indicates whether the navigation link is currently active.
   */
  active?: boolean;
  onSelect?: (event: Event) => void;
  onLinkTo: (href: string) => void;
}

export type INavItem = INavLink | INavMenu;

export const DEFAULT_NAV_CONTEXT: INavContext = {
  path: undefined,
  navItems: [],
};

export const NavContext = createContext<INavContext>(DEFAULT_NAV_CONTEXT);

export const useNav = () => useContext(NavContext);

export interface INavContext {
  path?: string;
  navItems: INavItem[];
}

interface INavProviderProps {
  /**
   * Optional navigation items to be provided.
   */
  navItems?: INavItem[];
}

export const NavProvider = ({
  navItems,
  children,
}: INavProviderProps & PropsWithChildren) => {
  const path = usePathname();

  const context: INavContext = {
    path,
    navItems:
      navItems?.map((item) => ({
        ...item,
        active:
          ((item as INavLink).href &&
            path &&
            path.startsWith((item as INavLink).href)) ||
          false,
      })) || [],
  };

  return <NavContext.Provider value={context}>{children}</NavContext.Provider>;
};
