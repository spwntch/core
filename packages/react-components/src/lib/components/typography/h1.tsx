
import { PropsWithChildren } from 'react';
import { cn } from '../../utils';
import React from 'react';

export interface IH1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {
  className?: string;
}

export const H1 = React.forwardRef<HTMLHeadingElement, IH1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          className
        )}
        {...props}
      >
        {props.children}
      </h1>
    );
  }
);
