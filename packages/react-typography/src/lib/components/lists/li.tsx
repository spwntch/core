import { cn } from '@spwntch/ui';
import React, { PropsWithChildren, forwardRef } from 'react';

export interface ILiProps
  extends React.HTMLAttributes<HTMLLIElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Li component for displaying list items.
 * Use this component to render items within a list.
 */
export const Li = forwardRef<HTMLLIElement, ILiProps>(
  ({ className, ...props }, ref) => {
    return (
      <li ref={ref} className={cn('margin-top: 0.5rem', className)} {...props}>
        {props.children}
      </li>
    );
  }
);

Li.displayName = 'Li';
