import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';
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
        className={cn(
          'scroll-m-20  font-extrabold, tracking-tight text-4xl lg:text-5xl',
          className
        )}
        {...props}
      >
        {props.children}
      </h1>
    );
  }
);

H1.displayName = 'H1';
