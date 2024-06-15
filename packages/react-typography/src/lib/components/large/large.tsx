import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';

export interface ILargeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Large component for displaying prominent paragraph text.
 * Use this component to highlight important text in your content.
 */
export const Large = forwardRef<HTMLParagraphElement, ILargeProps>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('text-lg font-semibold', className)} {...props}>
        {props.children}
      </p>
    );
  }
);

Large.displayName = 'Large';
