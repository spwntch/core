import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../../utils"

/**
 * Accordion component - A container for accordion items.
 * 
 * @param {object} props - Props for Accordion
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @returns {JSX.Element} The Accordion component
 */
const Accordion = AccordionPrimitive.Root

/**
 * AccordionItem component - An item in the Accordion.
 * 
 * @param {object} props - Props for AccordionItem
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The AccordionItem component
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

/**
 * AccordionTrigger component - A trigger for the Accordion item.
 * 
 * @param {object} props - Props for AccordionTrigger
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The AccordionTrigger component
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * AccordionContent component - The content of the Accordion item.
 * 
 * @param {object} props - Props for AccordionContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The AccordionContent component
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
