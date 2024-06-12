import React, { PropsWithChildren, forwardRef } from 'react';
import { Small } from '@/react-typography';
import { useBrand } from '../brand-provider/brand-provider';

export interface ITaglineProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  className?: string;
}

export const Tagline = forwardRef<HTMLDivElement, ITaglineProps>(
  ({ className, ...props }, ref) => {
    const { tagline } = useBrand();

    return (
      <Small className={className} ref={ref} {...props}>
        {tagline}
      </Small>
    );
  }
);

Tagline.displayName = 'Tagline';

export default Tagline;
