import React from 'react';
import { H3 } from '@spwntch/typography';
import { cn } from '@spwntch/ui';

export interface ILogoCloudProps {
  title?: string;
  logos: { src: string; alt?: string }[];
  className?: string;
}

export const LogoCloud: React.FC<ILogoCloudProps> = ({
  title,
  logos,
  className,
}) => {
  if (!logos?.length) return null;
  return (
    <div className={cn('mx-auto bg-primary-foreground text-primary', className)}>
      {title && <H3 className="text-center pt-4">{title}</H3>}
      <div
        className={cn(
          'py-8 px-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4'
        )}
      >
        {logos.map((logo) => (
          <img
            key={logo.src}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
