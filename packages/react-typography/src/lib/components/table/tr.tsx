import React from 'react';
import { cn } from '@/react-ui';
import styles from './table.module.css';

export interface ITrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

/**
 * Tr component for displaying table rows.
 * Use this component to wrap individual table cells.
 */
export const Tr: React.FC<ITrProps> = ({ className, ...props }) => {
  return <tr className={cn(styles.tr, className)} {...props} />;
};
