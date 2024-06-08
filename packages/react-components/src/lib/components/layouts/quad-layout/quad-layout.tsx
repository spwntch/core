import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './quad-layout.module.css';

export interface IQuadLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  flipQuadrants?: [boolean, boolean, boolean, boolean];
  containers?: [ReactNode, ReactNode, ReactNode, ReactNode];
}

export const QuadLayout = forwardRef<HTMLDivElement, IQuadLayoutProps>(
  ({ className, flipQuadrants = [false, false, false, false], containers, ...props }, ref) => {
    return (
      <div
        className={cn(styles['quad-layout'], className)}
        ref={ref}
        {...props}
      >
        <div className={cn(styles['pane'], flipQuadrants[0] && styles['flip'])}>{containers ? containers[0] : 'Pane One'}</div>
        <div className={cn(styles['pane'], flipQuadrants[1] && styles['flip'])}>{containers ? containers[1] : 'Pane Two'}</div>
        <div className={cn(styles['pane'], flipQuadrants[2] && styles['flip'])}>{containers ? containers[2] : 'Pane Three'}</div>
        <div className={cn(styles['pane'], flipQuadrants[3] && styles['flip'])}>{containers ? containers[3] : 'Pane Four'}</div>
      </div>
    );
  }
);

QuadLayout.displayName = 'QuadLayout';

export default QuadLayout;
