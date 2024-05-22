import React, { PropsWithChildren } from 'react';
import { cn } from '@/react-ui';

export interface ILiProps
  extends React.HTMLAttributes<HTMLLIElement>,
    PropsWithChildren {
  className?: string;
}

export const Li = React.forwardRef<HTMLLIElement, ILiProps>(
  ({ className, ...props }, ref) => {
    return (
      <li ref={ref} className={cn(className)} {...props}>
        {props.children}
      </li>
    );
  }
);
