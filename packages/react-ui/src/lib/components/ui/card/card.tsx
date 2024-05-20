import * as React from 'react';
import { cn } from '../../../utils';
import styles from './card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional class names to style the card component.
   */
  className?: string;
}

/**
 * Card component to display content within a styled container.
 * 
 * The Card component can be used to group related content together and
 * provides a flexible and extensible container for content sections.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(styles.card, className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * CardHeader component to display the header section of the card.
 * 
 * Use this component to display the title and description at the top of the card.
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(styles.card__header, className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

/**
 * CardTitle component to display the title of the card.
 * 
 * Use this component to display the main heading of the card content.
 */
const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(styles.card__title, className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

/**
 * CardDescription component to display the description of the card.
 * 
 * Use this component to provide additional information or context for the card content.
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(styles.card__description, className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * CardContent component to display the main content of the card.
 * 
 * Use this component to place the primary content or elements within the card.
 */
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(styles.card__content, className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * CardFooter component to display the footer section of the card.
 * 
 * Use this component to place actions, buttons, or any additional information at the bottom of the card.
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(styles.card__footer, className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
