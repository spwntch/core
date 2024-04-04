import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface ISmallProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

export const Small = React.forwardRef<HTMLParagraphElement, ISmallProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none',
          className
        )}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);
