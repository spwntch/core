import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import styles from './button.module.css';

import { cn } from '../../../utils';

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.variant_default,
      destructive: styles.variant_destructive,
      outline: styles.variant_outline,
      secondary: styles.variant_secondary,
      ghost: styles.variant_ghost,
      link: styles.variant_link,
    },
    size: {
      default: styles.size_default,
      sm: styles.size_sm,
      lg: styles.size_lg,
      icon: styles.size_icon,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface NewButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const NewButton = React.forwardRef<HTMLButtonElement, NewButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
NewButton.displayName = 'NewButton';

export { NewButton, buttonVariants };
