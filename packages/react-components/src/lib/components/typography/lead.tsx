import React, { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface ILeadProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

export const Lead = React.forwardRef<HTMLParagraphElement, ILeadProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-xl text-muted-foreground', className)}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);
