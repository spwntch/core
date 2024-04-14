import { ShellProvider } from '@/next-shell';
import React, { PropsWithChildren } from 'react';
import { brand, primaryNav } from '../config';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ShellProvider brand={brand} navItems={primaryNav}>
      {children}
    </ShellProvider>
  );
};
