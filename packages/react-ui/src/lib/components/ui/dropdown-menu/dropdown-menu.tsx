import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from '../../../utils'
import styles from './dropdown-menu.module.css'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/**
 * DropdownMenuSubTrigger component - The trigger for a sub menu.
 * 
 * @param {object} props - Props for DropdownMenuSubTrigger
 * @param {boolean} [props.inset] - If true, adds additional padding to the left
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuSubTrigger component
 */
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      styles['dropdown-menu-sub-trigger'],
      inset && styles['dropdown-menu-sub-trigger-inset'],
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className={styles['dropdown-menu-sub-trigger-chevron']} />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

/**
 * DropdownMenuSubContent component - The content of a sub menu.
 * 
 * @param {object} props - Props for DropdownMenuSubContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuSubContent component
 */
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(styles['dropdown-menu-sub-content'], className)}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

/**
 * DropdownMenuContent component - The content of the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuContent
 * @param {number} [props.sideOffset=4] - The offset from the side of the trigger
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuContent component
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(styles['dropdown-menu-content'], className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/**
 * DropdownMenuItem component - An item in the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuItem
 * @param {boolean} [props.inset] - If true, adds additional padding to the left
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuItem component
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      styles['dropdown-menu-item'],
      inset && styles['dropdown-menu-item-inset'],
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/**
 * DropdownMenuCheckboxItem component - A checkbox item in the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuCheckboxItem
 * @param {boolean} [props.checked] - If true, the checkbox is checked
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuCheckboxItem component
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(styles['dropdown-menu-checkbox-item'], className)}
    checked={checked}
    {...props}
  >
    <span className={styles['dropdown-menu-checkbox-item-indicator']}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={styles['dropdown-menu-checkbox-item-icon']} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

/**
 * DropdownMenuRadioItem component - A radio item in the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuRadioItem
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuRadioItem component
 */
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(styles['dropdown-menu-radio-item'], className)}
    {...props}
  >
    <span className={styles['dropdown-menu-radio-item-indicator']}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className={styles['dropdown-menu-radio-item-icon']} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

/**
 * DropdownMenuLabel component - A label in the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuLabel
 * @param {boolean} [props.inset] - If true, adds additional padding to the left
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuLabel component
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(styles['dropdown-menu-label'], inset && styles['dropdown-menu-label-inset'], className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/**
 * DropdownMenuSeparator component - A separator in the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuSeparator
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The DropdownMenuSeparator component
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(styles['dropdown-menu-separator'], className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/**
 * DropdownMenuShortcut component - A shortcut label in the dropdown menu.
 * 
 * @param {object} props - Props for DropdownMenuShortcut
 * @param {string} [props.className] - Additional className for the component
 * @returns {JSX.Element} The DropdownMenuShortcut component
 */
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(styles['dropdown-menu-shortcut'], className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
