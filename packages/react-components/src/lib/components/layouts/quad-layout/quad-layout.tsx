import { cn } from '@spwntch/ui';
import React, { forwardRef, ReactNode } from 'react';

export interface IQuadLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  flipQuadrants?: [boolean, boolean, boolean, boolean];
  containers?: [ReactNode, ReactNode, ReactNode, ReactNode];
}

export const QuadLayout = forwardRef<HTMLDivElement, IQuadLayoutProps>(
  (
    {
      className,
      flipQuadrants = [false, false, false, false],
      containers,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn('grid grid-cols-2 grid-rows-2 gap-4 h-full w-full', className)}
        ref={ref}
        {...props}
      >
        <div className={cn('flex items-center justify-center h-full w-full bg-gray-300', flipQuadrants[0] && 'transform rotate-180')}>
          {containers ? containers[0] : 'Pane One'}
        </div>
        <div className={cn('flex items-center justify-center h-full w-full', flipQuadrants[1] && 'transform rotate-180')}>
          {containers ? containers[1] : 'Pane Two'}
        </div>
        <div className={cn('flex items-center justify-center h-full w-full bg-gray-300', flipQuadrants[2] && 'transform rotate-180')}>
          {containers ? containers[2] : 'Pane Three'}
        </div>
        <div className={cn('flex items-center justify-center h-full w-full', flipQuadrants[3] && 'transform rotate-180')}>
          {containers ? containers[3] : 'Pane Four'}
        </div>
      </div>
    );
  }
);

QuadLayout.displayName = 'QuadLayout';

export default QuadLayout;
