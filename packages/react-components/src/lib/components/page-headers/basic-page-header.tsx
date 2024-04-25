import { PropsWithChildren, forwardRef } from 'react';
import { IPageSectionContent } from '../../types';
import { cn } from '../../utils';
import { H1, H3, P } from '../typography';

export interface BasicPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  header: IPageSectionContent;
  className?: string;
}

export const BasicPageHeader = forwardRef<HTMLDivElement, BasicPageHeaderProps>(
  ({ header, className, children }, ref) => {
    return (
      <div className={cn('text-center w-full', className)} ref={ref}>
        <H1 className="mt-6">{header.heading}</H1>
        <H3 className="mt-4">{header.subHeading}</H3>
        <P className="mb-8">{header.body}</P>
        <div className="flex justify-center gap-8">{children}</div>
      </div>
    );
  }
);
