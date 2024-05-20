import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from '../../../utils'
import styles from './sheet.module.css'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

/**
 * SheetOverlay component - The overlay for the sheet.
 * 
 * @param {object} props - Props for SheetOverlay
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The SheetOverlay component
 */
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(styles['sheet-overlay'], className)}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  styles['sheet'],
  {
    variants: {
      side: {
        top: styles['sheet-top'],
        bottom: styles['sheet-bottom'],
        left: styles['sheet-left'],
        right: styles['sheet-right'],
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

/**
 * SheetContent component - The content for the sheet.
 * 
 * @param {object} props - Props for SheetContent
 * @param {string} [props.side=right] - The side from which the sheet appears
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The SheetContent component
 */
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className={cn(styles['sheet-content'])}>
        <X className={styles['sheet-close-icon']} />
        <span className={styles['sheet-screen-reader-only']}>Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

/**
 * SheetHeader component - The header for the sheet.
 * 
 * @param {object} props - Props for SheetHeader
 * @param {string} [props.className] - Additional className for the component
 * @returns {JSX.Element} The SheetHeader component
 */
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(styles['sheet-header'], className)}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

/**
 * SheetFooter component - The footer for the sheet.
 * 
 * @param {object} props - Props for SheetFooter
 * @param {string} [props.className] - Additional className for the component
 * @returns {JSX.Element} The SheetFooter component
 */
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(styles['sheet-footer'], className)}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

/**
 * SheetTitle component - The title for the sheet.
 * 
 * @param {object} props - Props for SheetTitle
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The SheetTitle component
 */
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(styles['sheet-title'], className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

/**
 * SheetDescription component - The description for the sheet.
 * 
 * @param {object} props - Props for SheetDescription
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The SheetDescription component
 */
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(styles['sheet-description'], className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
