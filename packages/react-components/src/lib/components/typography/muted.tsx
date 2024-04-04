import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface IMutedProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

export const Muted = React.forwardRef<HTMLParagraphElement, IMutedProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);
