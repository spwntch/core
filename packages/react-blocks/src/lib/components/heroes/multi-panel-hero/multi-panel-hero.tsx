import { IMultiPanelLayoutProps, MultiPanelLayout } from '@/react-components';
import { cn } from '@/react-ui';
import { forwardRef } from 'react';
import styles from './multi-panel-hero.module.css';

export interface IMultiPanelHeroProps extends IMultiPanelLayoutProps {
  className?: string;
}

export const MultiPanelHero = forwardRef<HTMLDivElement, IMultiPanelHeroProps>(
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
    return (
      <MultiPanelLayout
        className={cn(styles.container, className)}
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
