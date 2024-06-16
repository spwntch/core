import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';
import styles from './ul.module.css';

export interface IUlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Ul component for displaying unordered lists.
 * Use this component to render bulleted lists in your content.
 */
export const Ul = forwardRef<HTMLUListElement, IUlProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn(styles.ul, className)} {...props}>
        {props.children}
      </ul>
    );
  }
);

Ul.displayName = 'Ul';
