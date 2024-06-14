import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';
import styles from './p.module.css';

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
      <p ref={ref} className={cn(styles.p, className)} {...props}>
        {props.children}
      </p>
    );
  }
);

P.displayName = 'P';
