import { cn } from '@spwntch/ui';
import React from 'react';

interface ContentChildrenProps {
  alignmentClass: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentChildren: React.FC<ContentChildrenProps> = ({
  alignmentClass,
  children,
  className,
}) => (
  <div
    className={cn(
      'mt-8 flex gap-8',
      {
        'justify-start items-start': alignmentClass === 'top-left',
        'justify-start items-center': alignmentClass === 'top-center',
        'justify-start items-end': alignmentClass === 'top-right',
        'justify-center items-start': alignmentClass === 'middle-left',
        'justify-center items-center': alignmentClass === 'middle-center',
        'justify-center items-end': alignmentClass === 'middle-right',
        'justify-end items-start': alignmentClass === 'bottom-left',
        'justify-end items-center': alignmentClass === 'bottom-center',
        'justify-end items-end': alignmentClass === 'bottom-right',
      },
      className
    )}
  >
    {children}
  </div>
);

export default ContentChildren;
