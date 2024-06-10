import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './multi-panel-layout.module.css';

export interface IMultiPanelLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  containers?:
    | [ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode, ReactNode];
  flip?: boolean;
  mainPaneCoverage?: number; // Changed to mainPaneCoverage
  orientation?: 'horizontal' | 'vertical';
}

export const MultiPanelLayout = forwardRef<
  HTMLDivElement,
  IMultiPanelLayoutProps
>(
  (
    {
      className,
      containers,
      flip = false,
      mainPaneCoverage = 50,
      orientation = 'horizontal',
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    const mainBlockStyle = isHorizontal
      ? { width: `${mainPaneCoverage}%`, order: flip ? 1 : 0 }
      : { height: `${mainPaneCoverage}%`, order: flip ? 1 : 0 };

    const subBlockContainerStyle = isHorizontal
      ? {
          flex: `1 1 calc(100% - ${mainPaneCoverage}%)`,
          display: 'flex',
          'flex-direction': 'column',
        }
      : {
          flex: `1 1 calc(100% - ${mainPaneCoverage}%)`,
          display: 'flex',
          'flex-direction': 'row',
        };

    return (
      <div
        className={cn(
          styles['multi-panel-layout'],
          isHorizontal ? styles['horizontal-split'] : styles['vertical-split'],
          className
        )}
        ref={ref}
        {...props}
      >
        <div className={styles['main-block']} style={mainBlockStyle}>
          {containers ? containers[0] : 'Main Block'}
        </div>
        <div
          className={styles['vertical-split']}
          style={subBlockContainerStyle}
        >
          {containers &&
            containers.slice(1).map((container, index) => (
              <div key={index} className={styles['sub-block']}>
                {container}
              </div>
            ))}
        </div>
      </div>
    );
  }
);

MultiPanelLayout.displayName = 'MultiPanelLayout';

export default MultiPanelLayout;
