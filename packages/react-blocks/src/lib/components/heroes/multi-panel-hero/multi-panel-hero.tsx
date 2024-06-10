import { cn } from '@/react-ui';
import React, { forwardRef, ReactNode } from 'react';
import { MultiPanelLayout, IMultiPanelLayoutProps } from '@/react-components';
import styles from './multi-panel-hero.module.css';

export interface IMultiPanelHeroProps extends IMultiPanelLayoutProps {
  className?: string;
  height: number;
}

export const MultiPanelHero = forwardRef<HTMLDivElement, IMultiPanelHeroProps>(
  ({ className, containers, flip = false, mainPaneCoverage = 50, orientation = 'horizontal', ...props }, ref) => {
    return (
      <MultiPanelLayout
        className={cn(styles['multi-panel-hero'], className)}
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

MultiPanelHero.displayName = 'MultiPanelHero';

export default MultiPanelHero;
