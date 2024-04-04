import { PropsWithChildren } from 'react';
import { cn } from '../../utils';
import React from 'react';

export interface IH3Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

export const H3 = React.forwardRef<HTMLHeadingElement, IH3Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          className
        )}
        {...props}
      >
        {props.children}
      </h3>
    );
  }
);
