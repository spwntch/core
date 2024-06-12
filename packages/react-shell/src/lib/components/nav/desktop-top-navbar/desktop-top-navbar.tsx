import { ButtonGroup } from '@/react-components';
import { cn } from '@/react-ui';
import React, { forwardRef } from 'react';
import { NavToolbar } from '..';
import { Logo } from '../../brand';
import { GithubButton, ThemeToggleButton } from '../../buttons';
import { MobileNavDrawer } from '../mobile-nav-drawer/mobile-nav-drawer';
import styles from './desktop-top-navbar.module.css';

interface IDesktopTopNavbarProps extends React.HTMLAttributes<HTMLElement> {
  classNames?: string;
  logoHeight?: number;
  navAlignment?: 'start' | 'center' | 'end';
  disableThemeToggle?: boolean;
  githubUrl?: string;
  onLinkTo: (href: string) => void;
}

export const DesktopTopNavbar = forwardRef<HTMLElement, IDesktopTopNavbarProps>(
  (
    {
      classNames,
      logoHeight,
      navAlignment,
      disableThemeToggle = false,
      githubUrl,
      onLinkTo,
      ...props
    },
    ref
  ) => {
    return (
      <header className={cn(styles.header, classNames)} ref={ref} {...props}>
        <div className={styles.container}>
          <Logo
            height={logoHeight || 36}
            className={styles.logo}
            onClick={() => onLinkTo('/')}
          />
          <div className="flex-1">
            <nav
              className={cn(
                styles.nav,
                navAlignment === 'start'
                  ? styles['nav-start']
                  : navAlignment === 'end'
                  ? styles['nav-end']
                  : styles['nav-center']
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
          <div className="hidden md:block"></div>
          <div className={styles['theme-toggle-button']}>
            {githubUrl && <GithubButton url={githubUrl} />}
          </div>
          <div className={styles['mobile-nav-drawer']}>
            <ButtonGroup>
              <MobileNavDrawer onLinkTo={onLinkTo} />
            </ButtonGroup>
          </div>
        </div>
      </header>
    );
  }
);

DesktopTopNavbar.displayName = 'DesktopTopNavbar';
