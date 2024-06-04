import * as React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Card component for displaying content in a styled container.
 *
 * - Use the `Card` component as a wrapper for other card components such as `CardHeader`, `CardContent`, etc.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The properties to configure the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

/**
 * CardHeader component for displaying the header of a card.
 *
 * - Use the `CardHeader` component to display the header section of a card.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The properties to configure the CardHeader component.
 * @returns {JSX.Element} The rendered CardHeader component.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/**
 * CardTitle component for displaying the title of a card.
 *
 * - Use the `CardTitle` component to display the title text of a card.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - The properties to configure the CardTitle component.
 * @returns {JSX.Element} The rendered CardTitle component.
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

/**
 * CardDescription component for displaying the description of a card.
 *
 * - Use the `CardDescription` component to display descriptive text for a card.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - The properties to configure the CardDescription component.
 * @returns {JSX.Element} The rendered CardDescription component.
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/**
 * CardContent component for displaying the main content of a card.
 *
 * - Use the `CardContent` component to display the main content inside a card.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The properties to configure the CardContent component.
 * @returns {JSX.Element} The rendered CardContent component.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * CardFooter component for displaying the footer of a card.
 *
 * - Use the `CardFooter` component to display the footer section of a card.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The properties to configure the CardFooter component.
 * @returns {JSX.Element} The rendered CardFooter component.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
