import { IMultiPanelLayoutProps, MultiPanelLayout } from '@/react-components';
import { cn } from '@spwntch/ui';
import { forwardRef } from 'react';
import styles from './multi-panel-block.module.css';

export interface IMultiPanelBlockProps extends IMultiPanelLayoutProps {
  className?: string;
  height?: number; // New height prop
  hero?: boolean; // New hero prop
}

export const MultiPanelBlock = forwardRef<
  HTMLDivElement,
  IMultiPanelBlockProps
>(
  (
    {
      className,
      containers,
      flip = false,
      mainPaneCoverage = 50,
      orientation = 'horizontal',
      height = 540, // Default height set to 540
      hero = false, // Default hero to false
      ...props
    },
    ref
  ) => {
    return (
      <MultiPanelLayout
        className={cn(styles.container, hero && styles.hero, className)}
        style={!hero ? { height: `${height}px` } : undefined} // Apply height only if hero is false
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

MultiPanelBlock.displayName = 'MultiPanelSection';

export default MultiPanelBlock;
