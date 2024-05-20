import { PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../../utils';
import { BackroundPattern } from './background-pattern/background-pattern';

/**
 * Props for the BackgroundImageContainer component.
 */
interface BackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  /**
   * Additional class name(s) for the container.
   */
  className?: string;
  
  /**
   * The URL of the background image.
   */
  src?: string;
  
  /**
   * Whether to darken the background image.
   */
  darkenImage?: boolean;
  
  /**
   * Whether to show a background pattern.
   */
  showBackgroundPattern?: boolean;
}

export const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  BackgroundImageContainerProps
>(
  (
    {
      className,
      src = '/images/guy-sitting-at-tech-control-station.webp',
      darkenImage,
      showBackgroundPattern,
      children,
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'h-full w-full relative isolate overflow-hidden pt-48 sm:pt-64',
          className
        )}
        ref={ref}
      >
        <img
          src={src}
          alt=""
          className={cn(
            'absolute inset-0 -z-10 h-full w-full object-cover',
            darkenImage && 'brightness-50'
          )}
          width={1280}
          height={720}
        />
        {showBackgroundPattern && <BackroundPattern />}
        <div
          className={cn(
            'mx-auto max-w-7xl px-6 lg:px-8',
            darkenImage && 'text-white'
          )}
        >
          <div className="mx-auto lg:mx-0">{children}</div>
        </div>
      </div>
    );
  }
);

export default BackgroundImageContainer;
