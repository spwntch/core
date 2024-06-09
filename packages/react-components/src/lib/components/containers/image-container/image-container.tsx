import { cn } from '@/react-ui';
import React, { PropsWithChildren, forwardRef } from 'react';
import { IImage } from '../../../types';
import styles from './image-container.module.css';

export interface IBackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
  image: IImage;
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  blur?: 'edges' | boolean;
}

export const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  IBackgroundImageContainerProps
>(({ className, image, rounded, blur, children, ...props }, ref) => {
  const { src, alt, darken } = image;
  return (
    <div className={cn(styles['container'], className)} ref={ref} {...props}>
      <img
        src={src}
        alt={alt || `website image with src: ${src}`}
        className={cn(
          styles['image'],
          rounded && styles[`${rounded}-rounded`],
          darken && styles['image--darken'],
          blur === 'edges'
            ? styles['image--blur-edges']
            : blur === true && styles['image--blur']
        )}
      />
      <div className={styles['inner-content']}>{children}</div>
    </div>
  );
});

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export default BackgroundImageContainer;