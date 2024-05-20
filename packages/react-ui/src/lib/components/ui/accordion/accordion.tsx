import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import styles from "./Accordion.module.css"

import { cn } from "../../../utils"

const Accordion = AccordionPrimitive.Root

/**
 * AccordionItem component - Represents an individual item within the Accordion.
 * 
 * @param {object} props - Props for AccordionItem
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(styles['accordion-item'], className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

/**
 * AccordionTrigger component - The trigger element to open or close an AccordionItem.
 * 
 * @param {object} props - Props for AccordionTrigger
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className={styles['accordion-header']}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(styles['accordion-trigger'], className)}
      {...props}
    >
      {children}
      <ChevronDown className={styles['accordion-chevron']} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * AccordionContent component - The content area revealed when an AccordionItem is expanded.
 * 
 * @param {object} props - Props for AccordionContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(styles['accordion-content'], styles['accordion-content-closed'], styles['accordion-content-open'])}
    {...props}
  >
    <div className={cn(styles['accordion-content-inner'], className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
