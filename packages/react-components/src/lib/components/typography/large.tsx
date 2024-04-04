import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface ILargeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

export const Large = React.forwardRef<HTMLParagraphElement, ILargeProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-lg font-semibold', className)}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);
