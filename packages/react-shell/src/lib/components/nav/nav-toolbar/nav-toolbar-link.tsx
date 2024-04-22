import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/react-components';
import { INavLink } from '../../../providers/nav-provider';

type INavToolbarLinkProps = INavLink;

export const NavToolbarLink = ({
  label,
  href,
  onLinkTo,
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
