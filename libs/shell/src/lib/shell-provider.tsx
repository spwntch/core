'use client';
import { IShellProviderProps } from '@/react-shell';
import React, { PropsWithChildren } from 'react';
import { ShellProvider as SpwnShellProvider } from '@/react-shell';

export const ShellProvider = (
  props: IShellProviderProps & PropsWithChildren
) => {
  return <SpwnShellProvider {...props} />;
};
