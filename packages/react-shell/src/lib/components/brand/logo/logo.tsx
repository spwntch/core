import { cn } from '@/react-ui';
import { forwardRef } from 'react';
import { useBrand } from '../brand-provider/brand-provider';

export interface ILogoProps {
  className?: string;
  /**
   * Alt text for the logo image. Defaults to 'Logo'.
   */

  variant?: 'logo' | 'mark';
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
  ({ className, variant = 'logo', width, height = 40, onClick }, ref) => {
    const brand = useBrand();
    const altText = variant === 'logo' ? 'Logo' : 'Mark';
    const logo = variant === 'logo' ? brand.logoUrl : brand.markUrl;
    width = variant === 'logo' ? width || height * 4 : height;

    return (
      <div className={cn(' w-fit h-fit', className)} onClick={onClick}>
        {logo?.light && (
          <img
            ref={ref}
            width={width}
            height={height}
            alt={altText}
            src={logo.light}
            className="dark:hidden"
          />
        )}
        {logo?.dark && (
          <img
            ref={ref}
            width={width}
            height={height}
            alt={altText}
            src={logo.dark}
            className="hidden dark:block"
          />
        )}
      </div>
    );
  }
);
