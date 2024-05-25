import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import styles from './h1.module.css';

export interface IH1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * H1 component for displaying primary headings.
 * Use this component to highlight main titles in your content.
 */
export const H1 = forwardRef<HTMLHeadingElement, IH1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(styles.h1, className)}
        {...props}
      >
        {props.children}
      </h1>
    );
  }
);

H1.displayName = 'H1';
