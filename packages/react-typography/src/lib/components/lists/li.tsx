import { cn } from '@spwntch/ui';
import React, { PropsWithChildren, forwardRef } from 'react';
import styles from './li.module.css';

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
      <li ref={ref} className={cn(styles.li, className)} {...props}>
        {props.children}
      </li>
    );
  }
);

Li.displayName = 'Li';
