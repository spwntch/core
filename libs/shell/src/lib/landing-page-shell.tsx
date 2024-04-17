'use client';
import { RegularFooter } from '@/react-shell';
import { PropsWithChildren } from 'react';

/**
 * Props for the SiteShell component.
 */
export interface SiteShellProps {
  underContruction?: boolean;
  /**
   * Determines whether to display shell information.
   */
  displayShellInfo?: boolean;
}

export const LandingPageShell = ({
  // underContruction,
  // displayShellInfo,
  children,
}: SiteShellProps & PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col container">
      <main className="h-full flex flex-col overflow-y">
        <div className="flex-1">{children}</div>
        {/* {underContruction ? <UnderConstructionFooter /> :  */}
        <RegularFooter />
        {/* } */}
      </main>
      {/* {displayShellInfo && <ShellInfo />} */}
    </div>
  );
};
