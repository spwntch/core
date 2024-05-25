import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
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
      <h3
        ref={ref}
        className={cn(styles.h3, className)}
        {...props}
      >
        {props.children}
      </h3>
    );
  }
);

H3.displayName = 'H3';
