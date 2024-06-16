import React from 'react';
import { cn } from '@spwntch/ui';

export interface ITrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

/**
 * Tr component for displaying table rows.
 * Use this component to wrap individual table cells.
 */
export const Tr: React.FC<ITrProps> = ({ className, ...props }) => {
  return <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />;
};
