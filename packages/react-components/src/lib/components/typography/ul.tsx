import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface IUlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    PropsWithChildren {
  className?: string;
}

export const Ul = React.forwardRef<HTMLUListElement, IUlProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          'my-6 ml-6 list-disc [&>li]:mt-2',
          className
        )}
        {...props}
      >
        {props.children}
      </ul>
    );
  }
);
