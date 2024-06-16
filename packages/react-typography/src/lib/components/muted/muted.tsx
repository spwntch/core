import { cn } from '@spwntch/ui';
import React, { PropsWithChildren, forwardRef } from 'react';
import styles from './muted.module.css';

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
      <p ref={ref} className={cn(styles.muted, className)} {...props}>
        {props.children}
      </p>
    );
  }
);

Muted.displayName = 'Muted';
