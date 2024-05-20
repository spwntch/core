import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../utils";
import styles from "./button.module.css";

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: styles['button--default'],
        destructive: styles['button--destructive'],
        outline: styles['button--outline'],
        secondary: styles['button--secondary'],
        ghost: styles['button--ghost'],
        link: styles['button--link'],
      },
      size: {
        default: styles['button--size-default'],
        sm: styles['button--size-sm'],
        lg: styles['button--size-lg'],
        icon: styles['button--size-icon'],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** 
   * Use Slot component as a child if true.
   */
  asChild?: boolean;
  /**
   * Additional class names to style the component.
   */
  className?: string;
}

/**
 * Button component for user interactions.
 * 
 * Use this component to trigger actions when clicked.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(styles.button, buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
