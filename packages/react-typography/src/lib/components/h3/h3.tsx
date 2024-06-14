import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';
import styles from './h3.module.css';

export interface IH3Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * H3 component for displaying tertiary headings.
 * Use this component to highlight sub-section titles in your content.
 */
export const H3 = forwardRef<HTMLHeadingElement, IH3Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
        {props.children}
      </h3>
    );
  }
);

H3.displayName = 'H3';
