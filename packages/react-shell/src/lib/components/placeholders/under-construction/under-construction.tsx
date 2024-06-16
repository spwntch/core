import { H2 } from '@spwntch/typography';
import { PropsWithChildren, forwardRef } from 'react';

export const UnderConstruction = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children, ...props }, ref) => {
    return (
      <div
        className="m-4 p-4 h-full flex flex-col items-center border-4 border-dashed border-muted text-muted-foreground"
        ref={ref}
        {...props}
      >
        <H2>Under Construction</H2>
        <div className="w-full pt-8 px-4">{children}</div>
      </div>
    );
  }
);

UnderConstruction.displayName = 'UnderConstruction';
