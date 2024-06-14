import { cn } from '@spwntch/ui';
import React, { forwardRef, ReactNode } from 'react';
import styles from './split-layout.module.css';

export interface ISplitLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  split?: 'horizontal' | 'vertical';
  flip?: boolean;
  containers:
    | [ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode, ReactNode];
  mainPaneCoverage?: number;
}

export const SplitLayout = forwardRef<HTMLDivElement, ISplitLayoutProps>(
  (
    {
      className,
      split = 'horizontal',
      flip,
      containers,
      mainPaneCoverage = 50,
      ...props
    },
    ref
  ) => {
    const isHorizontal = split === 'horizontal';

    const mainPaneStyle = isHorizontal
      ? { flexBasis: `${mainPaneCoverage}%` }
      : { flexBasis: `${mainPaneCoverage}%` };

    const otherPaneStyle = isHorizontal
      ? { flexBasis: `${(100 - mainPaneCoverage) / (containers.length - 1)}%` }
      : { flexBasis: `${(100 - mainPaneCoverage) / (containers.length - 1)}%` };

    return (
      <div
        className={cn(
          styles['split-layout'],
          isHorizontal ? 'flex-row' : 'flex-col',
          flip && (isHorizontal ? 'flex-row-reverse' : 'flex-col-reverse'),
          className
        )}
        ref={ref}
        {...props}
      >
        {containers &&
          containers.map((container, index) => (
            <div
              key={index}
              className={styles['split-pane']}
              style={index === 0 ? mainPaneStyle : otherPaneStyle}
            >
              {container}
            </div>
          ))}
      </div>
    );
  }
);

SplitLayout.displayName = 'SplitLayout';

export default SplitLayout;
