import * as React from 'react';
import { cn } from '../../../utils';
import styles from './card.module.css';

/**
 * Card component - A container for displaying content and actions on a single topic.
 * 
 * @param {object} props - Props for Card
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The Card component
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles.card, className)}
    {...props}
  />
));
Card.displayName = 'Card';

/**
 * CardHeader component - The header of the card, typically contains the title and description.
 * 
 * @param {object} props - Props for CardHeader
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardHeader component
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles['card-header'], className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/**
 * CardTitle component - The title of the card.
 * 
 * @param {object} props - Props for CardTitle
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardTitle component
 */
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(styles['card-title'], className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

/**
 * CardDescription component - The description of the card.
 * 
 * @param {object} props - Props for CardDescription
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardDescription component
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(styles['card-description'], className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/**
 * CardContent component - The main content area of the card.
 * 
 * @param {object} props - Props for CardContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardContent component
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles['card-content'], className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * CardFooter component - The footer of the card, typically contains actions.
 * 
 * @param {object} props - Props for CardFooter
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The CardFooter component
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles['card-footer'], className)}
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
