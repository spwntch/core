import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import styles from './ol.module.css';

export interface OlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    PropsWithChildren {
  className?: string;
}

/**
 * Ol component for displaying ordered lists.
 * Use this component to render numbered lists in your content.
 */
export const Ol = forwardRef<HTMLUListElement, OlProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(styles.ol, className)}
        {...props}
      >
        {props.children}
      </ul>
    );
  }
);

Ol.displayName = 'Ol';