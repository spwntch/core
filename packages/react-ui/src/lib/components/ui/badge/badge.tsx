import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../utils'
import styles from './badge.module.css'

const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      default: styles['badge-default'],
      secondary: styles['badge-secondary'],
      destructive: styles['badge-destructive'],
      outline: styles['badge-outline'],
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

/**
 * BadgeProps - Props for the Badge component
 * @typedef {Object} BadgeProps
 * @property {string} [className] - Additional className for the badge
 * @property {string} [variant] - Variant of the badge
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component - A small, pill-shaped component used to display a count or label.
 * 
 * @param {BadgeProps} props - Props for the Badge component
 * @returns {JSX.Element} The Badge component
 */
function Badge({ className, variant, ...props }: BadgeProps): JSX.Element {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
