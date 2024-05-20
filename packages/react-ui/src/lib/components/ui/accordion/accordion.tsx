import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "../../../utils";
import styles from "./accordion.module.css";

/**
 * Accordion component that provides an expandable/collapsible content section.
 * 
 * Use this component to wrap AccordionItem components for a cohesive accordion
 * behavior.
 */
const Accordion = AccordionPrimitive.Root;

/**
 * AccordionItem component represents a single item within an Accordion.
 *
 * @param {string} className - Additional class names for styling the component.
 * @param {object} props - Additional props for the AccordionItem.
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { className?: string }
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(styles['accordion-item'], className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

/**
 * AccordionTrigger component is a button that toggles the visibility of the
 * corresponding AccordionContent.
 *
 * @param {string} className - Additional class names for styling the component.
 * @param {object} props - Additional props for the AccordionTrigger.
 * @param {React.ReactNode} children - The content to be displayed inside the trigger.
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className={styles['accordion-trigger__header']}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(styles['accordion-trigger'], className)}
      {...props}
    >
      {children}
      <ChevronDown className={cn(styles['accordion-trigger__icon'], "[data-state=open]:" + styles['accordion-trigger__icon--open'])} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * AccordionContent component that contains the content for a specific AccordionItem.
 *
 * @param {string} className - Additional class names for styling the component.
 * @param {object} props - Additional props for the AccordionContent.
 * @param {React.ReactNode} children - The content to be displayed inside the AccordionContent.
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(styles['accordion-content'], { [styles['accordion-content--closed']]: true, [styles['accordion-content--open']]: true })}
    {...props}
  >
    <div className={cn(styles['accordion-content__inner'], className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
