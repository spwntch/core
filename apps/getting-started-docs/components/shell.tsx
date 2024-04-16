'use client';
// In a generated App, import the following from @spwntch/shell
import { RegularFooter, DesktopTopNavbar } from '@/react-shell';
import { PropsWithChildren } from 'react';

/**
 * Props for the Shell component.
 */
export interface ShellProps {
  underContruction?: boolean;
  /**
   * Configuration options for the navbar.
   */
  navbar?: {
    /**
     * Additional CSS classes for the navbar.
     */
    classNames?: string;
    /**
     * Alignment of the navbar.
     */
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
  };
  /**
   * Determines whether to display shell information.
   */
  displayShellInfo?: boolean;
}

const Shell = ({
  // underContruction,
  navbar,
  // displayShellInfo,
  children,
}: ShellProps & PropsWithChildren) => {
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

export default Shell;
