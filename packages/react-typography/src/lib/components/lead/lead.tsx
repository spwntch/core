import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';

export interface ILeadProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Lead component for displaying lead paragraph text.
 * Use this component to emphasize introductory text in your content.
 */
export const Lead = forwardRef<HTMLParagraphElement, ILeadProps>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('text-xl text-muted-foreground', className)} {...props}>
        {props.children}
      </p>
    );
  }
);

Lead.displayName = 'Lead';
