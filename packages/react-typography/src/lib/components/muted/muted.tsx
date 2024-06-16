import { cn } from '@spwntch/ui';
import React, { PropsWithChildren, forwardRef } from 'react';

export interface IMutedProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Muted component for displaying less prominent text.
 * Use this component to render muted text in your content.
 */
export const Muted = forwardRef<HTMLParagraphElement, IMutedProps>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props}>
        {props.children}
      </p>
    );
  }
);

Muted.displayName = 'Muted';
