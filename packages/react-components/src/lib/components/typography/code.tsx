import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils';

export interface ICodeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

export const Code = forwardRef<HTMLParagraphElement, ICodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
          className
        )}
        {...props}
      >
        {props.children}
      </code>
    );
  }
);
