import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../utils";
import styles from "./badge.module.css";

const badgeVariants = cva(
  styles.badge,
  {
    variants: {
      variant: {
        default: styles["badge--default"],
        secondary: styles["badge--secondary"],
        destructive: styles["badge--destructive"],
        outline: styles["badge--outline"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Badge component for displaying inline labels.
 *
 * This component can be used to create labels with various styles. It supports different variants
 * like default, secondary, destructive, and outline. You can use the `className` prop to add
 * additional styles.
 *
 * @param {string} className - Additional class names to style the component.
 * @param {string} variant - The variant of the badge. It can be 'default', 'secondary', 'destructive', or 'outline'.
 * @param {object} props - Additional props for the Badge component.
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
