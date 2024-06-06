import React, { PropsWithChildren, forwardRef } from 'react';
import { cn } from '@/react-ui';
import { BackroundPatternOne } from './background-patterns/background-pattern-one';
import styles from './background-image-container.module.css';
import { IImage } from '../../../types';

export interface IBackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
  image: IImage;
}

export const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  IBackgroundImageContainerProps
>(({ className, image, children, ...props }, ref) => {
  const {
    src,
    alt,
    backgroundPattern,
    darken,
    attribution,
    coverage = 'full',
  } = image;
  return (
    <div
      className={cn(styles['background-container'], className)}
      ref={ref}
      {...props}
    >
      <img
        src={src}
        alt={alt || `website image with src: ${src}`}
        className={cn(
          styles['background-image'],
          coverage === 'split-left' && styles['background-image--split-left'],
          coverage === 'split-right' && styles['background-image--split-right'],
          coverage === 'split-top' && styles['background-image--split-top'],
          coverage === 'split-bottom' &&
            styles['background-image--split-bottom'],
          darken && styles['background-image--darken']
        )}
      />
      {backgroundPattern && <BackroundPatternOne />}
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
});

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export default BackgroundImageContainer;
