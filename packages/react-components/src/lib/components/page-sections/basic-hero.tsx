import { PropsWithChildren, forwardRef } from 'react';
import { IPageSectionContent } from '../../types';
import { cn } from '../../utils';
import { H1, H3, P } from '../typography';

export interface BasicHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  hero: IPageSectionContent;
  className?: string;
}

export const BasicHero = forwardRef<HTMLDivElement, BasicHeroProps>(
  ({ hero, className, children }, ref) => {
    return (
      <div
        className={cn(
          ' w-full h-full flex flex-col  justify-center',
          className
        )}
        ref={ref}
      >
        <H1 className="mt-6">{hero.heading}</H1>
        <H3 className="mt-4">{hero.subHeading}</H3>
        <div className="mt-4 mb-8">
          {hero.body?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
        </div>
        <div className="flex justify-center gap-8">{children}</div>
      </div>
    );
  }
);
