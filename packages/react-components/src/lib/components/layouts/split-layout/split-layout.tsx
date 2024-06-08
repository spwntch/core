import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './split-layout.module.css';

export interface ISplitLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  split?: 'horizontal' | 'vertical';
  flip?: boolean;
  containers: [ReactNode, ReactNode];
}

export const SplitLayout = forwardRef<HTMLDivElement, ISplitLayoutProps>(
  ({ className, split = 'horizontal', flip, containers, ...props }, ref) => {
    return (
      <div
        className={cn(
          styles['split-layout'],
          split === 'vertical' && 'flex-col',
          flip && (split === 'horizontal' ? 'flex-row-reverse' : 'flex-col-reverse'),
          className
        )}
        ref={ref}
        {...props}
      >
        <div className={styles['split-pane']}>{containers[0]}</div>
        <div className={styles['split-pane']}>{containers[1]}</div>
      </div>
    );
  }
);

SplitLayout.displayName = 'SplitLayout';

export default SplitLayout;
