import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';

export interface IInlineCodeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Code component for displaying inline code snippets.
 * Use this component to highlight code within your content.
 */
export const InlineCode = forwardRef<HTMLParagraphElement, IInlineCodeProps>(
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

InlineCode.displayName = 'InlineCode';
