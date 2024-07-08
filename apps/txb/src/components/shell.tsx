'use client';
import {
  RegularFooter,
  DesktopTopNavbar,
  UnderConstructionFooter,
  ShellProvider,
  IBrand,
} from '@/react-shell';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

export interface ShellProps {
  brand: IBrand;
  underContruction?: boolean;
  navbar?: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
  };
  githubUrl?: string;
}

export const Shell = ({
  brand,
  underContruction,
  navbar,
  githubUrl,
  children,
}: ShellProps & PropsWithChildren) => {
  const router = useRouter();

  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <ShellProvider brand={brand}>
      <div className="h-full flex flex-col mx-auto md:container">
        <DesktopTopNavbar
          classNames={`${navbar?.classNames} bg-background`}
          navAlignment={navbar?.alignment}
          logoHeight={navbar?.logoHeight}
          githubUrl={githubUrl}
          onLinkTo={handleLinkTo}
        />
        <main className="h-full flex flex-col overflow-y">
          {children}
          {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
        </main>
      </div>
    </ShellProvider>
  );
};
