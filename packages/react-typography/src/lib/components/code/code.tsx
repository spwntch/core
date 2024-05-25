import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import styles from './code.module.css';

export interface ICodeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Code component for displaying inline code snippets.
 * Use this component to highlight code within your content.
 */
export const Code = forwardRef<HTMLParagraphElement, ICodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(styles.code, className)}
        {...props}
      >
        {props.children}
      </code>
    );
  }
);

Code.displayName = 'Code';
