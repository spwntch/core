import React from 'react';
import { cn } from '@spwntch/ui';
import styles from './table.module.css';

export interface ITableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
}

/**
 * Table component for displaying tabular data.
 * Use this component to wrap the table structure.
 */
export const Table: React.FC<ITableProps> = ({ className, ...props }) => {
  return <table className={cn(styles.table, className)} {...props} />;
};
