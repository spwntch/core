'use client';
import { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface IButtonGroupProps {
  stacked?: boolean;
}

export const ButtonGroup = ({
  stacked = false,
  children,
}: IButtonGroupProps & PropsWithChildren) => {
  return (
    <div
      className={cn(
        'flex items-center gap-x-4 gap-y-2',
        stacked && 'flex-col'
      )}
    >
      {children}
    </div>
  );
};
