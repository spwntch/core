import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import styles from './badge.module.css';

import { cn } from '../../../utils';

const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      destructive: styles.destructive,
      outline: styles.outline,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
