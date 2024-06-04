import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import styles from './inline-code.module.css';

export interface IInlineCodeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Code component for displaying inline code snippets.
 * Use this component to highlight code within your content.
 */
export const InlineCode = forwardRef<HTMLParagraphElement, IInlineCodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <code ref={ref} className={cn(styles.code, className)} {...props}>
        {props.children}
      </code>
    );
  }
);

InlineCode.displayName = 'InlineCode';
