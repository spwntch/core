import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './split-layout.module.css';

export interface ISplitLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  split: 'left' | 'right' | 'top' | 'bottom';
  containers: [ReactNode, ReactNode];
}

export const SplitLayout = forwardRef<HTMLDivElement, ISplitLayoutProps>(
  ({ className, split, containers, ...props }, ref) => {
    return (
      <div
        className={cn(styles['split-layout'], className)}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            styles['split-pane'],
            split === 'left' && styles['split-pane--left'],
            split === 'right' && styles['split-pane--right'],
            split === 'top' && styles['split-pane--top'],
            split === 'bottom' && styles['split-pane--bottom']
          )}
        >
          {split === 'left' || split === 'top' ? containers[0] : containers[1]}
        </div>
        <div
          className={cn(
            styles['inner-content'],
            split === 'left' && styles['inner-content--right'],
            split === 'right' && styles['inner-content--left'],
            split === 'top' && styles['inner-content--bottom'],
            split === 'bottom' && styles['inner-content--top']
          )}
        >
          {split === 'left' || split === 'top' ? containers[1] : containers[0]}
        </div>
      </div>
    );
  }
);

SplitLayout.displayName = 'SplitLayout';

export default SplitLayout;
