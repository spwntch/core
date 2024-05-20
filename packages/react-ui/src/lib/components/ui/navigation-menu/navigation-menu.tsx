import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { cn } from '../../../utils'
import styles from './navigation-menu.module.css'

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(styles['navigation-menu'], className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

/**
 * NavigationMenuList component - A list for NavigationMenu items.
 * 
 * @param {object} props - Props for NavigationMenuList
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The NavigationMenuList component
 */
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(styles['navigation-menu-list'], "group", className)}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(styles['navigation-menu-trigger'])

/**
 * NavigationMenuTrigger component - A trigger for NavigationMenu items.
 * 
 * @param {object} props - Props for NavigationMenuTrigger
 * @param {string} [props.className] - Additional className for the component
 * @param {React.ReactNode} props.children - Children elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The NavigationMenuTrigger component
 */
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className={styles['navigation-menu-trigger-chevron']}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

/**
 * NavigationMenuContent component - The content of the NavigationMenu.
 * 
 * @param {object} props - Props for NavigationMenuContent
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The NavigationMenuContent component
 */
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(styles['navigation-menu-content'], className)}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

/**
 * NavigationMenuViewport component - The viewport of the NavigationMenu.
 * 
 * @param {object} props - Props for NavigationMenuViewport
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The NavigationMenuViewport component
 */
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={styles['navigation-menu-viewport-container']}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(styles['navigation-menu-viewport'], className)}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

/**
 * NavigationMenuIndicator component - The indicator of the NavigationMenu.
 * 
 * @param {object} props - Props for NavigationMenuIndicator
 * @param {string} [props.className] - Additional className for the component
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} The NavigationMenuIndicator component
 */
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(styles['navigation-menu-indicator'], className)}
    {...props}
  >
    <div className={styles['navigation-menu-indicator-icon']} />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
