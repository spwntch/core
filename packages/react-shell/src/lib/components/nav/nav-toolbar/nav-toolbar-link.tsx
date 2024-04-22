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
    <NavigationMenuItem className='cursor-pointer'>
      <NavigationMenuLink
        className={navigationMenuTriggerStyle()}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
