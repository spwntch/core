'use client';
import { PropsWithChildren } from 'react';
import { IPageSectionContent } from '../../types';
import { cn } from '../../utils';
import { H1, H3, P } from '../typography';

interface IPageHeaderProps {
  content: IPageSectionContent;
  className?: string;
}

export const BasicPageHeader = ({
  content,
  className,
  children,
}: IPageHeaderProps & PropsWithChildren) => {
  return (
    <div className={cn('text-center  w-full', className)}>
      <H1 className="mt-6">{content.heading}</H1>
      <H3 className="mt-4">{content.subHeading}</H3>
      <P className="mb-8">{content.body}</P>
      <div className="flex justify-center gap-8">{children}</div>
    </div>
  );
};
