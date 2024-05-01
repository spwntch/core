import { ButtonGroup, cn } from '@/react-components';
import { Logo } from '../brand';
import { GithubButton, ThemeToggleButton } from '../buttons';
import { MobileNavDrawer } from './mobile-nav-drawer';
import { NavToolbar } from '../nav';

interface IDesktopTopNavbarProps {
  classNames?: string;
  logoHeight?: number;
  navAlignment?: 'start' | 'center' | 'end';
  disableThemeToggle?: boolean;
  githubUrl?: string;
  onLinkTo: (href: string) => void;
}

export const DesktopTopNavbar = ({
  classNames,
  logoHeight,
  navAlignment,
  disableThemeToggle = false,
  githubUrl,
  onLinkTo,
}: IDesktopTopNavbarProps) => {
  return (
    <header className={cn('sticky top-0 z-50', classNames)}>
      <div className=" flex p-2 items-center">
        {/* <Link className="py-1 " href="/">*/}
        <Logo
          height={logoHeight || 36}
          className="cursor-pointer"
          onClick={() => onLinkTo('/')}
        />
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
            <NavToolbar onLinkTo={onLinkTo} />
          </nav>
        </div>
        <div>
          <ButtonGroup>
            {!disableThemeToggle && <ThemeToggleButton />}
          </ButtonGroup>
        </div>
        <div className="hidden md:block">
          <ButtonGroup>
            {/* <Button variant="secondary" className="flex gap-2">
              <div>Sign In</div>
              <LogIn />
            </Button> */}
          </ButtonGroup>
        </div>
        <div className="ml-2">
          {githubUrl && <GithubButton url={githubUrl} />}
        </div>
        <div className="block md:hidden">
          <ButtonGroup>
            <MobileNavDrawer onLinkTo={onLinkTo} />
          </ButtonGroup>
        </div>
      </div>
    </header>
  );
};
