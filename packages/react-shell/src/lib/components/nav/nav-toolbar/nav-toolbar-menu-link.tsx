import {
  Muted,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/react-components';
// import Link from 'next/link';
import { INavLink } from '../../../providers/nav-provider';

interface INavToolbarMenuLinkProps extends INavLink {
  className?: string;
}

export const NavToolbarMenuLink = ({
  label,
  description,
  href,
  onLinkTo,
  className,
}: INavToolbarMenuLinkProps) => {
  return (
    <li className={className}>
      <NavigationMenuItem>
        {/* <Link href={href}> */}
        <NavigationMenuLink
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foregrouns"
          onSelect={() => onLinkTo(href)}
        >
          <h4 className="text-sm font-medium leading-none">{label}</h4>
          <Muted className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </Muted>
        </NavigationMenuLink>
        {/* </Link> */}
      </NavigationMenuItem>
    </li>
  );
};
