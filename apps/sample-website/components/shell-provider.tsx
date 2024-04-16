'use client';
import React, { PropsWithChildren } from 'react';
// In a generated App, import the following from @spwntch/shell
import { ShellProvider as SpwnShellProvider } from '@/react-shell';
import { brand } from '../config';

const ShellProvider = ({ children }: PropsWithChildren) => {
  return <SpwnShellProvider brand={brand}>{children}</SpwnShellProvider>;
};

export default ShellProvider;
