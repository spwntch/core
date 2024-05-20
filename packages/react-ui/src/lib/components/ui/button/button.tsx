import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import styles from './button.module.css';
import { cn } from '../../../utils';

const buttonVariants = cva(styles['button-base'], {
  variants: {
    variant: {
      default: styles['button-variant-default'],
      destructive: styles['button-variant-destructive'],
      outline: styles['button-variant-outline'],
      secondary: styles['button-variant-secondary'],
      ghost: styles['button-variant-ghost'],
      link: styles['button-variant-link'],
    },
    size: {
      default: styles['button-size-default'],
      sm: styles['button-size-sm'],
      lg: styles['button-size-lg'],
      icon: styles['button-size-icon'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the component will render as a child component.
   * @default false
   */
  asChild?: boolean;
}

/**
 * Button component for user interaction.
 *
 * @param {ButtonProps} props - The properties for the button component.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {size === 'icon' ? <Check className="h-4 w-4" /> : children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };