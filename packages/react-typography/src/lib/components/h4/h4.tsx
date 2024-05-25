import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import styles from './h4.module.css';

export interface IH4Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * H4 component for displaying quaternary headings.
 * Use this component to highlight subsection titles in your content.
 */
export const H4 = forwardRef<HTMLHeadingElement, IH4Props>(
  ({ className, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(styles.h4, className)}
        {...props}
      >
        {props.children}
      </h4>
    );
  }
);

H4.displayName = 'H4';
