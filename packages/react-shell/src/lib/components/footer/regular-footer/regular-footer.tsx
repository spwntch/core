import { cn } from '@spwntch/ui';
import React, { forwardRef } from 'react';
import { About } from '../sections/about/about';
import { Contact } from '../sections/contact/contact';
import { Legal } from '../sections/legal/legal';
import { Social } from '../sections/social/social';

export interface IRegularFooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const RegularFooter = forwardRef<HTMLElement, IRegularFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        className={cn(
          'relative isolate bg-background text-foreground pt-12 pb-3',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <About />
            <Contact />
            <Social />
          </div>
          <hr />
          <Legal />
        </div>
      </footer>
    );
  }
);

RegularFooter.displayName = 'RegularFooter';
