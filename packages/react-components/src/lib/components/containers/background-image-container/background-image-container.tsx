import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import { BackroundPatternOne } from './background-patterns/background-pattern-one';
import styles from './background-image-container.module.css';

export interface IBackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
  src?: string;
  darkenImage?: boolean;
  showBackgroundPattern?: boolean;
  coverage?: 'full' | 'split-left' | 'split-right';
}

export const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  IBackgroundImageContainerProps
>(
  (
    {
      className,
      src = '/images/guy-sitting-at-tech-control-station.webp',
      darkenImage,
      showBackgroundPattern,
      coverage = 'full',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          styles['background-container'],
          className
        )}
        ref={ref}
        {...props}
        >
        <img
          src={src}
          alt=""
          className={cn(
            styles['background-image'],
            coverage === 'split-left' && styles['split-left'],
            coverage === 'split-right' && styles['split-right'],
            darkenImage && styles['background-image--darken']
          )}
          width={1280}
          height={720}
        />
        {showBackgroundPattern && <BackroundPatternOne />}
        
          <div className={cn(styles['inner-content'],
            coverage === 'split-left' && styles['inner-content--split-left'],
            coverage === 'split-right' && styles['inner-content--split-right']
          )}>{children}</div>
        </div>
    );
  }
);

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export default BackgroundImageContainer;
