import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from '../../../utils'
import styles from './menubar.module.css'

const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup

/**
 * Menubar component - A container for Menubar items.
 * 
 * @param {object} props - Props for Menubar
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The Menubar component
 */
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(styles.menubar, className)}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

/**
 * MenubarTrigger component - A trigger for Menubar items.
 * 
 * @param {object} props - Props for MenubarTrigger
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarTrigger component
 */
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(styles['menubar-trigger'], className)}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

/**
 * MenubarSubTrigger component - A trigger for a sub menu in the Menubar.
 * 
 * @param {object} props - Props for MenubarSubTrigger
 * @param {boolean} [props.inset] - If true, adds additional padding to the left
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarSubTrigger component
 */
const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(styles['menubar-sub-trigger'], inset && styles['menubar-sub-trigger-inset'], className)}
    {...props}
  >
    {children}
    <ChevronRight className={styles['menubar-sub-trigger-chevron']} />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

/**
 * MenubarSubContent component - The content of a sub menu in the Menubar.
 * 
 * @param {object} props - Props for MenubarSubContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarSubContent component
 */
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(styles['menubar-sub-content'], className)}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

/**
 * MenubarContent component - The content of the Menubar.
 * 
 * @param {object} props - Props for MenubarContent
 * @param {string} [props.className] - Additional className for the component
 * @param {string} [props.align=start] - Alignment of the Menubar content
 * @param {number} [props.alignOffset=-4] - Offset for the alignment
 * @param {number} [props.sideOffset=8] - Offset for the side
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarContent component
 */
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(styles['menubar-content'], className)}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName

/**
 * MenubarItem component - An item in the Menubar.
 * 
 * @param {object} props - Props for MenubarItem
 * @param {boolean} [props.inset] - If true, adds additional padding to the left
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarItem component
 */
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(styles['menubar-item'], inset && styles['menubar-item-inset'], className)}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

/**
 * MenubarCheckboxItem component - A checkbox item in the Menubar.
 * 
 * @param {object} props - Props for MenubarCheckboxItem
 * @param {boolean} [props.checked] - If true, the checkbox is checked
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarCheckboxItem component
 */
const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(styles['menubar-checkbox-item'], className)}
    checked={checked}
    {...props}
  >
    <span className={styles['menubar-checkbox-item-indicator']}>
      <MenubarPrimitive.ItemIndicator>
        <Check className={styles['menubar-checkbox-item-icon']} />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

/**
 * MenubarRadioItem component - A radio item in the Menubar.
 * 
 * @param {object} props - Props for MenubarRadioItem
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarRadioItem component
 */
const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(styles['menubar-radio-item'], className)}
    {...props}
  >
    <span className={styles['menubar-radio-item-indicator']}>
      <MenubarPrimitive.ItemIndicator>
        <Circle className={styles['menubar-radio-item-icon']} />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

/**
 * MenubarLabel component - A label in the Menubar.
 * 
 * @param {object} props - Props for MenubarLabel
 * @param {boolean} [props.inset] - If true, adds additional padding to the left
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarLabel component
 */
const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(styles['menubar-label'], inset && styles['menubar-label-inset'], className)}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

/**
 * MenubarSeparator component - A separator in the Menubar.
 * 
 * @param {object} props - Props for MenubarSeparator
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The MenubarSeparator component
 */
const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(styles['menubar-separator'], className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

/**
 * MenubarShortcut component - A shortcut label in the Menubar.
 * 
 * @param {object} props - Props for MenubarShortcut
 * @param {string} [props.className] - Additional className for the component
 * @returns {JSX.Element} The MenubarShortcut component
 */
const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(styles['menubar-shortcut'], className)}
      {...props}
    />
  )
}
MenubarShortcut.displayName = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
