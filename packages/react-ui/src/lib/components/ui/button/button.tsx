import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../utils'
import styles from './button.module.css'

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles['button-default'],
      destructive: styles['button-destructive'],
      outline: styles['button-outline'],
      secondary: styles['button-secondary'],
      ghost: styles['button-ghost'],
      link: styles['button-link'],
    },
    size: {
      default: styles['button-size-default'],
      sm: styles['button-size-sm'],
      lg: styles['button-size-lg'],
      icon: styles['button-size-icon'],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

/**
 * ButtonProps - Props for the Button component
 * @typedef {Object} ButtonProps
 * @property {boolean} [asChild] - If true, the button will render as a child component
 * @property {string} [className] - Additional className for the button
 * @property {string} [variant] - Variant of the button
 * @property {string} [size] - Size of the button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * Button component - A versatile button component with multiple variants and sizes.
 * 
 * @param {ButtonProps} props - Props for the Button component
 * @returns {JSX.Element} The Button component
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref): JSX.Element => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
