'use client';
import {
  DesktopTopNavbar,
  RegularFooter,
  UnderConstructionFooter,
} from '@/react-shell';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export interface SiteShellProps {
  underContruction?: boolean;
  navbar?: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
  };
  githubUrl?: string;
}

export const WebsiteShell = ({
  underContruction,
  navbar,
  githubUrl,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const router = useRouter();

  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="h-full flex flex-col mx-auto md:container">
      <DesktopTopNavbar
        classNames={`${navbar?.classNames} bg-background`}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        githubUrl={githubUrl}
        onLinkTo={handleLinkTo}
      />
      <main className="h-full  flex flex-col overflow-y">
        {children}
        {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
      </main>
    </div>
  );
};
