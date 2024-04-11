import { forwardRef } from 'react';
import { useBrand } from '../../providers';

export interface IMarkProps {
  /**
   * Alt text for the logo image. Defaults to 'Mark'.
   */

  altText?: string;
  /**
   * The width (and height) of the logo image in pixels. Defaults to 80.
   */
  width?: number;
}

export const Mark = forwardRef<HTMLImageElement, IMarkProps>(
  ({ altText = 'Mark', width = 80 }, ref) => {
    const brand = useBrand();

    return (
      <div className="mx-auto w-fit my-6 lg:mb-12">
        {brand.markUrl?.light && (
          <img
            ref={ref}
            width={width}
            height={width}
            alt={altText}
            src={brand.markUrl.light}
            className="dark:hidden"
          />
        )}
        {brand.markUrl?.dark && (
          <img
            ref={ref}
            width={width}
            height={width}
            alt={altText}
            src={brand.markUrl.dark}
            className="hidden dark:block"
          />
        )}
      </div>
    );
  }
);
