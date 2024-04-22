import { cn } from '@/react-components';
import { forwardRef } from 'react';
import { useBrand } from '../../providers';

export interface ILogoProps {
  className?: string;
  /**
   * Alt text for the logo image. Defaults to 'Logo'.
   */

  altText?: string;
  /**
   * The width of the logo image in pixels. Defaults to 240.
   */
  width?: number;
  /**
   * The height of the logo image in pixels. Defaults to 80. If not provided, it will be calculated based on the width.
   */
  height?: number;
  onClick?: () => void;
}

export const Logo = forwardRef<HTMLImageElement, ILogoProps>(
  ({ className, altText = 'Logo', width, height = 40, onClick }, ref) => {
    const brand = useBrand();

    return (
      <div className={cn(' w-fit h-fit', className)} onClick={onClick}>
        {brand.logoUrl?.light && (
          <img
            ref={ref}
            width={width || height * 4}
            height={height}
            alt={altText}
            src={brand.logoUrl.light}
            className="dark:hidden"
          />
        )}
        {brand.logoUrl?.dark && (
          <img
            ref={ref}
            width={width || height * 4}
            height={height}
            alt={altText}
            src={brand.logoUrl.dark}
            className="hidden dark:block"
          />
        )}
      </div>
    );
  }
);
