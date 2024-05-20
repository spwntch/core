import * as React from "react";
import { cn } from "../../../utils";

/**
 * Card component - A container for displaying content and actions on a single topic.
 * 
 * @param {object} props - Props for Card
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The Card component
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * CardHeader component - The header for the card.
 * 
 * @param {object} props - Props for CardHeader
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardHeader component
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * CardTitle component - The title for the card.
 * 
 * @param {object} props - Props for CardTitle
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardTitle component
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * CardDescription component - The description for the card.
 * 
 * @param {object} props - Props for CardDescription
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardDescription component
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * CardContent component - The content for the card.
 * 
 * @param {object} props - Props for CardContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardContent component
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * CardFooter component - The footer for the card.
 * 
 * @param {object} props - Props for CardFooter
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardFooter component
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
