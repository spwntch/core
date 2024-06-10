import { IMultiPanelLayoutProps, MultiPanelLayout } from '@/react-components';
import { cn } from '@/react-ui';
import { forwardRef } from 'react';
import styles from './multi-panel-section.module.css';

export interface IMultiPanelSectionProps extends IMultiPanelLayoutProps {
  className?: string;
  height?: number;
  hero?: boolean;
}

export const MultiPanelSection = forwardRef<HTMLDivElement, IMultiPanelSectionProps>(
  ({ className, containers, flip = false, mainPaneCoverage = 50, orientation = 'horizontal', height = 540, hero = false, ...props }, ref) => {
    return (
      <div
        className={cn(styles['multi-panel-section'], className, { 'h-screen': hero })}
        style={!hero ? { height: `${height}px` } : undefined}
        ref={ref}
        {...props}
      >
        <MultiPanelLayout
          flip={flip}
          mainPaneCoverage={mainPaneCoverage}
          orientation={orientation}
          containers={containers}
        />
      </div>
    );
  }
);

MultiPanelSection.displayName = 'MultiPanelSection';

export default MultiPanelSection;
