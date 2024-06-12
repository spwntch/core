import React from 'react';
import { cn } from '@/react-ui';
import styles from './table.module.css';

export interface ITheadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

/**
 * Thead component for displaying the table header.
 * Use this component to wrap the table header rows.
 */
export const Thead: React.FC<ITheadProps> = ({ className, ...props }) => {
  return <thead className={cn(styles.thead, className)} {...props} />;
};