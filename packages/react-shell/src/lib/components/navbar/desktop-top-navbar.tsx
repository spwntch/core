import { cn } from '@/react-components';
import { Logo } from '../brand';

interface IDesktopTopNavbarProps {
  classNames?: string;
  logoHeight?: number;
  navAlignment?: 'start' | 'center' | 'end';
}

export const DesktopTopNavbar = ({
  classNames,
  logoHeight,
  navAlignment,
}: IDesktopTopNavbarProps) => {
  return (
    <header className={cn('sticky top-0 z-50 bg-background', classNames)}>
      <div className=" flex py-1 px-4 items-center">
        {/* <Link className="py-1 " href="/">*/}
        <Logo height={logoHeight || 36} />
        {/* </Link> */}
        <div className="flex-1">
          <nav
            className={cn(
              'hidden md:flex mx-10',
              navAlignment === 'start'
                ? 'justify-start'
                : navAlignment === 'end'
                ? 'justify-end'
                : 'justify-center'
            )}
          >
            NavToolbar
            {/* <NavToolbar /> */}
          </nav>
        </div>
        <div>
          ThemeToggle
          {/* <ButtonGroup>
            <ThemeToggleButton />
          </ButtonGroup> */}
        </div>
        <div className="hidden md:block">
          Login
          {/* <ButtonGroup> */}
          {/* <Button variant="secondary" className="flex gap-2">
              <div>Sign In</div>
              <LogIn />
            </Button> */}
          {/* </ButtonGroup> */}
        </div>
        <div className="ml-2 block md:hidden">
          MobileNavDrawer
          {/* <ButtonGroup>
            <MobileNavDrawer />
          </ButtonGroup> */}
        </div>
      </div>
    </header>
  );
};
