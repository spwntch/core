'use client';
import { LandingPageShell } from '@spwntch/shell';
import { PropsWithChildren } from 'react';

const Shell = ({ children }: PropsWithChildren) => {
  return <LandingPageShell>{children}</LandingPageShell>;
};

export default Shell;
