import React from 'react';
import { cn } from '@spwntch/ui';

export interface ITableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
}

/**
 * Table component for displaying tabular data.
 * Use this component to wrap the table structure.
 */
export const Table: React.FC<ITableProps> = ({ className, ...props }) => {
  return <table className={cn('w-full', className)} {...props} />;
};
