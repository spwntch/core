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

/**
 * BackgroundImageContainer component.
 *
 * A container component that displays a background image with optional darkening and a background pattern.
 */
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
          coverage === 'split-left' && styles['split-left'],
          coverage === 'split-right' && styles['split-right'],
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
            darkenImage && styles['background-image--darken']
          )}
          width={1280}
          height={720}
        />
        {showBackgroundPattern && <BackroundPatternOne />}
        <div
          className={cn(
            styles['content-container'],
            darkenImage && styles['content-container--darken']
          )}
        >
          <div className={styles['inner-content']}>{children}</div>
        </div>
      </div>
    );
  }
);

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export default BackgroundImageContainer;
