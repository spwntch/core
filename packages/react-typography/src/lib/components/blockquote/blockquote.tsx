import React from 'react';
import { cn } from '@/react-ui';
import styles from './blockquote.module.css';

export interface IBlockquoteProps
  extends React.HTMLAttributes<HTMLQuoteElement> {
  className?: string;
}

/**
 * Blockquote component for displaying quotations.
 * Use this component to highlight quotes within your content.
 */
export const Blockquote: React.FC<IBlockquoteProps> = ({
  className,
  ...props
}) => {
  return <blockquote className={cn(styles.blockquote, className)} {...props} />;
};

Blockquote.displayName = 'Blockquote';
