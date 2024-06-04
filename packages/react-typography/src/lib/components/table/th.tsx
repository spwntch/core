import React from 'react';
import { cn } from '@/react-ui';
import styles from './table.module.css';

export interface IThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

/**
 * Th component for displaying table header cells.
 * Use this component within table header rows.
 */
export const Th: React.FC<IThProps> = ({ className, ...props }) => {
  return <th className={cn(styles.th, className)} {...props} />;
};