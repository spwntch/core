import {
  cn,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@spwntch/ui';
import { INavLink } from '../../nav-provider/nav-provider';
import styles from './nav-menu-link.module.css';

type INavToolbarLinkProps = INavLink;

export const NavMenuLink = ({
  label,
  href,
  onLinkTo,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem className={styles['navigation-menu-item']}>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          styles['navigation-menu-link']
        )}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
