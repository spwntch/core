import { cn } from '@spwntch/ui';
import { H3, Small } from '@spwntch/typography';
import React, { forwardRef, PropsWithChildren } from 'react';
import { useBrand } from '../../../brand/brand-provider/brand-provider';

export interface IAboutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const About = forwardRef<HTMLDivElement, IAboutProps>(
  ({ className, ...props }, ref) => {
    const { about } = useBrand();

    return (
      <div className={cn('p4', className)} ref={ref} {...props}>
        <H3 className="mb-4">{about?.title || 'About Us'}</H3>
        <div>
          {about?.body?.map((paragraph, index) => (
            <Small key={index} className="mb-2">
              {paragraph}
            </Small>
          ))}
        </div>
      </div>
    );
  }
);

About.displayName = 'About';

export default About;
