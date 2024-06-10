import { IMultiPanelLayoutProps, MultiPanelLayout } from '@/react-components';
import { cn } from '@/react-ui';
import { forwardRef } from 'react';
import styles from './multi-panel-section.module.css';

export interface IMultiPanelSectionProps extends IMultiPanelLayoutProps {
  className?: string;
  height?: number; // New height prop
}

export const MultiPanelSection = forwardRef<HTMLDivElement, IMultiPanelSectionProps>(
  (
    {
      className,
      containers,
      flip = false,
      mainPaneCoverage = 50,
      orientation = 'horizontal',
      height, // New height prop
      ...props
    },
    ref
  ) => {
    return (
      <MultiPanelLayout
        className={cn(styles.container, className)}
        style={height ? { height: `${height}px` } : undefined} // Apply height if provided
        flip={flip}
        mainPaneCoverage={mainPaneCoverage}
        orientation={orientation}
        containers={containers}
        ref={ref}
        {...props}
      />
    );
  }
);

MultiPanelSection.displayName = 'MultiPanelSection';

export default MultiPanelSection;
