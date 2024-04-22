import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@spwntch/components';
import { INavLink } from '../../../providers/nav-provider';

type INavToolbarLinkProps = INavLink;

export const NavToolbarLink = ({
  label,
  onLinkTo,
  href,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem>
      {/* <Link href={href}> */}
      <NavigationMenuLink
        className={navigationMenuTriggerStyle()}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
      {/* </Link> */}
    </NavigationMenuItem>
  );
};
