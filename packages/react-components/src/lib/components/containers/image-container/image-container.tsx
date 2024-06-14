import { cn } from '@spwntch/ui';
import React, { PropsWithChildren, forwardRef } from 'react';
import { IImage } from '../../../types';

export interface IBackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
  image: IImage;
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  blur?: 'edges' | boolean;
}

export const ImageContainer = forwardRef<
  HTMLDivElement,
  IBackgroundImageContainerProps
>(({ className, image, rounded, blur, children, ...props }, ref) => {
  const { src, alt, darken } = image;
  return (
    <div className={cn('relative h-full w-full', className)} ref={ref} {...props}>
      <img
        src={src}
        alt={alt || `website image with src: ${src}`}
        className={cn(
          'absolute inset-0 -z-10 h-full w-full object-cover',
          rounded === 'xs' && 'rounded-sm',
          rounded === 'sm' && 'rounded-md',
          rounded === 'md' && 'rounded-lg',
          rounded === 'lg' && 'rounded-xl',
          rounded === 'xl' && 'rounded-2xl',
          rounded === 'xxl' && 'rounded-3xl',
          rounded === 'full' && 'rounded-full',
          darken && 'brightness-50',
          blur === 'edges' && 'filter blur-none',
          blur === true && 'filter blur-md',
          blur === 'edges' && `
            mask-image: radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 1) 60%,
              transparent 100%
            );
            mask-size: cover;
            mask-repeat: no-repeat;
          `
        )}
      />
      <div className='relative h-full w-full'>{children}</div>
    </div>
  );
});

ImageContainer.displayName = 'BackgroundImageContainer';

export default ImageContainer;
