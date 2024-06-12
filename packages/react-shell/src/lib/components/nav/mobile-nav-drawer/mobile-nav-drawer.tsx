'use client';
import React, { useState } from 'react';
import {
  Button,
  DropdownMenuSeparator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/react-ui';
import { Menu } from 'lucide-react';
import { useNav } from '../nav-provider/nav-provider';
import { Logo } from '../../brand';
import { Tagline } from '../../brand/tagline/tagline';
import { NavMenu } from '../nav-menu/nav-menu';
import styles from './mobile-nav-drawer.module.css';

interface IMobileNavDrawerProps {
  onLinkTo: (href: string) => void;
}

export const MobileNavDrawer: React.FC<IMobileNavDrawerProps> = ({ onLinkTo }) => {
  const [open, setOpen] = useState(false);
  const { navItems } = useNav();

  if (!navItems?.length) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={styles['trigger-button']}>
        <Button variant="outline" size="icon">
          <Menu className={styles['menu-icon']} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className={styles['sheet-content']}>
        <SheetHeader className={styles['sheet-header']}>
          <SheetTitle>
            <Logo width={180} className={styles.logo} />
          </SheetTitle>
          <SheetDescription asChild className={styles['sheet-description']}>
            <Tagline />
          </SheetDescription>
        </SheetHeader>
        <DropdownMenuSeparator className={styles.separator} />
        <NavMenu
          onLinkTo={(href) => {
            setOpen(false);
            onLinkTo(href);
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
