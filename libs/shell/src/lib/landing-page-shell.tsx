'use client';
import { PropsWithChildren } from 'react';
import { RegularFooter } from '@/react-shell';

export const LandingPageShell = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <RegularFooter />
    </div>
  );
};
