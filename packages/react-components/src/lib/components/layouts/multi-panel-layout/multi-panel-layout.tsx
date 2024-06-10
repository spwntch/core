import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './multi-panel-layout.module.css';

export interface IMultiPanelLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  containers?: [ReactNode, ReactNode, ReactNode];
  flip?: boolean;
  mainBlockWidth?: string;
}

export const MultiPanelLayout = forwardRef<HTMLDivElement, IMultiPanelLayoutProps>(
  ({ className, containers, flip = false, mainBlockWidth = '50%', ...props }, ref) => {
    const mainBlockStyle = {
      width: mainBlockWidth,
      order: flip ? 1 : 0,
    };

    const subBlockStyle = {
      flex: `1 1 calc(100% - ${mainBlockWidth})`,
    };

    return (
      <div className={cn(styles['multi-panel-layout'], className)} ref={ref} {...props}>
        <div className={styles['main-block']} style={mainBlockStyle}>
          {containers ? containers[0] : 'Main Block'}
        </div>
        <div className={styles['vertical-split']} style={subBlockStyle}>
          <div className={styles['sub-block']}>
            {containers ? containers[1] : 'Sub Block 1'}
          </div>
          <div className={styles['sub-block']}>
            {containers ? containers[2] : 'Sub Block 2'}
          </div>
        </div>
      </div>
    );
  }
);

MultiPanelLayout.displayName = 'MultiPanelLayout';

export default MultiPanelLayout;
