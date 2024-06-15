import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';
import styles from './h2.module.css';

export interface IH2Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * H2 component for displaying secondary headings.
 * Use this component to highlight section titles in your content.
 */
export const H2 = forwardRef<HTMLHeadingElement, IH2Props>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'scroll-m-20 border-b mt-8 pb-2 text-3xl font-semibold tracking-tight ',
          className
        )}
        {...props}
      >
        {props.children}
      </h2>
    );
  }
);

H2.displayName = 'H2';
