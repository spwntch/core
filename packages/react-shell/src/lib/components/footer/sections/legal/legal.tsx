import { P } from '@spwntch/typography';
import { cn } from '@spwntch/ui';
import { forwardRef } from 'react';
import {
  IBrandLegal,
  useBrand,
} from '../../../brand/brand-provider/brand-provider';

type ILegalProps = {
  override?: IBrandLegal;
  className?: string;
};

export const Legal = forwardRef<HTMLDivElement, ILegalProps>(
  ({ override, className, ...props }, ref) => {
    const { legal } = useBrand();

    const data = override || legal;

    return (
      <div
        className={cn(
          'mt-8 flex justify-between items-center text-xs md:text-sm leading-relaxed',
          className
        )}
        ref={ref}
        {...props}
      >
        <P>
          © {data?.copyrightYear} {data?.companyName}. All Rights Reserved.
        </P>
        <div className="flex gap-4">
          <a
            href="/privacy"
            target="_blank"
            className="underline hover:text-blue-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    );
  }
);

Legal.displayName = 'Legal';

export default Legal;
