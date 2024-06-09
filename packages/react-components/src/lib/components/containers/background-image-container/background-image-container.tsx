import { cn } from '@/react-ui';
import React, { PropsWithChildren, forwardRef } from 'react';
import { IImage } from '../../../types';
import styles from './background-image-container.module.css';

export interface IBackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
  image: IImage;
  rounded?:  'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  blur?: 'edges' | boolean;
}

export const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  IBackgroundImageContainerProps
>(({ className, image, rounded, blur, children, ...props }, ref) => {
  const { src, alt, darken } = image;
  return (
    <div
      className={cn(
        styles['background-container'],
        rounded && styles[`${rounded}-rounded`],
        className
      )}
      ref={ref}
      {...props}
    >
      <img
        src={src}
        alt={alt || `website image with src: ${src}`}
        className={cn(
          styles['background-image'],
          darken && styles['background-image--darken'],
          blur === 'edges' ? styles['background-image--blur-edges']:
          blur === true && styles['background-image--blur']
        )}
      />
      <div className={styles['inner-content']}>{children}</div>
    </div>
  );
});

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export default BackgroundImageContainer;
