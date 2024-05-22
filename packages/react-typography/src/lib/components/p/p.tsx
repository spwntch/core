import React, { PropsWithChildren } from 'react';
import { cn } from '@/react-ui';

export interface IPProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

export const P = React.forwardRef<HTMLParagraphElement, IPProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'leading-7 [&:not(:first-child)]:mt-6',
          className
        )}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);
