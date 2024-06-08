import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './quad-layout.module.css';

export interface IQuadLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  flip?: boolean;
  containers?: [ReactNode, ReactNode, ReactNode, ReactNode];
}

export const QuadLayout = forwardRef<HTMLDivElement, IQuadLayoutProps>(
  ({ className, flip, containers, ...props }, ref) => {
    const panes = flip && containers ? [containers[2], containers[3], containers[0], containers[1]] : containers;
    return (
      <div
        className={cn(styles['quad-layout'], className)}
        ref={ref}
        {...props}
      >
        {containers ? (
          <>
            <div className={styles['pane']}>{panes ? panes[0] : 'Pane One'}</div>
            <div className={styles['pane']}>{panes ? panes[1] : 'Pane Two'}</div>
            <div className={styles['pane']}>{panes ? panes[2] : 'Pane Three'}</div>
            <div className={styles['pane']}>{panes ? panes[3] : 'Pane Four'}</div>
          </>
        ) : (
          <>
            <div className={styles['pane']}>Pane One</div>
            <div className={styles['pane']}>Pane Two</div>
            <div className={styles['pane']}>Pane Three</div>
            <div className={styles['pane']}>Pane Four</div>
          </>
        )}
      </div>
    );
  }
);

QuadLayout.displayName = 'QuadLayout';

export default QuadLayout;
