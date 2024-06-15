import { cn } from '@spwntch/ui';
import React, { PropsWithChildren, forwardRef } from 'react';

export interface IPProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * P component for displaying paragraph text.
 * Use this component to render blocks of text in your content.
 */
export const P = forwardRef<HTMLParagraphElement, IPProps>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
        {props.children}
      </p>
    );
  }
);

P.displayName = 'P';
