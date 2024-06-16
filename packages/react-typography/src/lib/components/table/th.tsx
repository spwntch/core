import React from 'react';
import { cn } from '@spwntch/ui';

export interface IThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

/**
 * Th component for displaying table header cells.
 * Use this component within table header rows.
 */
export const Th: React.FC<IThProps> = ({ className, ...props }) => {
  return (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold',
        props.align === 'center' && 'text-center',
        props.align === 'right' && 'text-right',
        className
      )}
      {...props}
    />
  );
};
