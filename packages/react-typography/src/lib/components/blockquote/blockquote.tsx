import { cn } from '@spwntch/ui';
import React from 'react';

export interface IBlockquoteProps
  extends React.HTMLAttributes<HTMLQuoteElement> {
  className?: string;
}

/**
 * Blockquote component for displaying quotations.
 * Use this component to highlight quotes within your content.
 */
export const Blockquote: React.FC<IBlockquoteProps> = ({
  className,
  ...props
}) => {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  );
};

Blockquote.displayName = 'Blockquote';
