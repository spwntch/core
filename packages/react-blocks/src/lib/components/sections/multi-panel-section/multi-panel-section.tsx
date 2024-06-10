import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import { MultiPanelLayout, IMultiPanelLayoutProps } from '@/react-components';
import styles from './multi-panel-section.module.css';

export interface IMultiPanelSectionProps extends IMultiPanelLayoutProps {
  className?: string;
  height?: number;
  hero?: boolean;
}

export const MultiPanelSection = forwardRef<HTMLDivElement, IMultiPanelSectionProps>(
  ({ className, containers, flip = false, mainPaneCoverage = 50, orientation = 'horizontal', height = 540, hero = false, ...props }, ref) => {
    return (
      <MultiPanelLayout
        className={cn(
          styles['container'],
          hero ? styles['hero'] : `h-[${height}px]`,
          className
        )}
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
