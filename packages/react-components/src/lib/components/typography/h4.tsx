import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface IH4Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

export const H4 = React.forwardRef<HTMLHeadingElement, IH4Props>(
  ({ className, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-tight',
          className
        )}
        {...props}
      >
        {props.children}
      </h4>
    );
  }
);
