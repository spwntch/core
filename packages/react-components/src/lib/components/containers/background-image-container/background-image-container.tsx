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
  coverage?:
    | 'full'
    | 'split-left'
    | 'split-right'
    | 'split-top'
    | 'split-bottom';
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
        className={cn(styles['background-container'], className)}
        ref={ref}
        {...props}
      >
        <img
          src={src}
          alt=""
          className={cn(
            styles['background-image'],
            coverage === 'split-left' && styles['background-image--split-left'],
            coverage === 'split-right' &&
              styles['background-image--split-right'],
            coverage === 'split-top' && styles['background-image--split-top'],
            coverage === 'split-bottom' &&
              styles['background-image--split-bottom'],
            darkenImage && styles['background-image--darken']
          )}
        />
        {showBackgroundPattern && <BackroundPatternOne />}
        <div
          className={cn(
            styles['inner-content'],
            coverage === 'full' && styles['inner-content--full'],
            coverage === 'split-left' && styles['inner-content--split-left'],
            coverage === 'split-right' && styles['inner-content--split-right'],
            coverage === 'split-top' && styles['inner-content--split-top'],
            coverage === 'split-bottom' && styles['inner-content--split-bottom']
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export default BackgroundImageContainer;
