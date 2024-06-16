import {
  cn,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@spwntch/ui';
import { INavLink } from '../../nav-provider/nav-provider';

type INavToolbarLinkProps = INavLink;

export const NavMenuLink = ({
  label,
  href,
  onLinkTo,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem className="w-full mt-2 ">
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          'w-full justify-start ml-0'
        )}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
