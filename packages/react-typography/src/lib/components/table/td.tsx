import React from 'react';
import { cn } from '@spwntch/ui';
import styles from './table.module.css';

export interface ITdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

/**
 * Td component for displaying table data cells.
 * Use this component within table rows.
 */
export const Td: React.FC<ITdProps> = ({ className, ...props }) => {
  return <td className={cn(styles.td, className)} {...props} />;
};
