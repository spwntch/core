import React from 'react';
import { cn } from '@spwntch/ui';

export interface ITdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

/**
 * Td component for displaying table data cells.
 * Use this component within table rows.
 */
export const Td: React.FC<ITdProps> = ({ className, ...props }) => {
  return (
    <td
      className={cn(
        'border px-4 py-2 text-left',
        props.align === 'center' && 'text-center',
        props.align === 'right' && 'text-right',
        className
      )}
      {...props}
    />
  );
};
