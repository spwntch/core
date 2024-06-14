import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';
import styles from './small.module.css';

export interface ISmallProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Small component for displaying small text.
 * Use this component to render less prominent text in your content.
 */
export const Small = forwardRef<HTMLParagraphElement, ISmallProps>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(styles.small, className)} {...props}>
        {props.children}
      </p>
    );
  }
);

Small.displayName = 'Small';
