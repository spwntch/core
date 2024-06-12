import { Muted } from '@/react-typography';
import { NavigationMenuItem, NavigationMenuLink } from '@/react-ui';
import { INavLink } from '../../nav-provider/nav-provider';

type INavToolbarMenuLinkProps = INavLink;

export const NavSubMenuLink = ({
  label,
  description,
  href,
  onLinkTo,
}: INavToolbarMenuLinkProps) => {
  return (
    <li className="ml-2">
      <NavigationMenuItem asChild>
        <NavigationMenuLink
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foregrouns"
          onSelect={() => onLinkTo(href)}
        >
          <h4 className="text-sm font-medium leading-none">{label}</h4>
          <Muted className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </Muted>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
  );
};
