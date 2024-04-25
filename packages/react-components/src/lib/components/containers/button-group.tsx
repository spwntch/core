import { PropsWithChildren, forwardRef } from 'react';
import { cn } from '../../utils';

export interface IButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  stacked?: boolean;
}

export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>(
  ({ stacked = false, children }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center gap-x-4 gap-y-2',
          stacked && 'flex-col'
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
