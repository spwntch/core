import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface IH2Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

export const H2 = React.forwardRef<HTMLHeadingElement, IH2Props>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className
        )}
        {...props}
      >
        {props.children}
      </h2>
    );
  }
);
