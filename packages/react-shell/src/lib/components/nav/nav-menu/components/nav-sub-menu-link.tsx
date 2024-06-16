import { Muted } from '@spwntch/typography';
import { NavigationMenuItem, NavigationMenuLink } from '@spwntch/ui';
import { INavLink } from '../../nav-provider/nav-provider';
import styles from './nav-sub-menu-link.module.css';

type INavToolbarMenuLinkProps = INavLink;

export const NavSubMenuLink = ({
  label,
  description,
  href,
  onLinkTo,
}: INavToolbarMenuLinkProps) => {
  return (
    <li className={styles['list-item']}>
      <NavigationMenuItem asChild>
        <NavigationMenuLink
          className={styles['navigation-menu-link']}
          onSelect={() => onLinkTo(href)}
        >
          <h4 className={styles['navigation-menu-link-label']}>{label}</h4>
          <Muted className={styles['navigation-menu-link-description']}>
            {description}
          </Muted>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
  );
};
