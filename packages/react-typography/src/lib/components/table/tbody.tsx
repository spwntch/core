import React from 'react';
import { cn } from '@spwntch/ui';
import styles from './table.module.css';

export interface ITbodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

/**
 * Tbody component for displaying the table body.
 * Use this component to wrap the table body rows.
 */
export const Tbody: React.FC<ITbodyProps> = ({ className, ...props }) => {
  return <tbody className={cn(styles.tbody, className)} {...props} />;
};
