import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@spwntch/ui';

export interface OlProps
  extends React.HTMLAttributes<HTMLOListElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Ol component for displaying ordered lists.
 * Use this component to render numbered lists in your content.
 */
export const Ol = forwardRef<HTMLOListElement, OlProps>(
  ({ className, ...props }, ref) => {
    return (
      <ol ref={ref} className={cn('my-6 ml-6 list-decimal', className)} {...props}>
        {props.children}
      </ol>
    );
  }
);

Ol.displayName = 'Ol';
