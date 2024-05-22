import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "../../../utils"

/**
 * NavigationMenu component and its subcomponents for creating a responsive navigation menu.
 * 
 * The `NavigationMenu` component provides a flexible and customizable navigation menu system.
 * Use the various subcomponents to construct menus with triggers, content areas, indicators, and viewports.
 * 
 * - `NavigationMenuTrigger`: The element that toggles the visibility of the menu content.
 * - `NavigationMenuContent`: The container for the menu content.
 * - `NavigationMenuItem`: A standard item within the menu.
 * - `NavigationMenuLink`: A link item within the menu.
 * - `NavigationMenuIndicator`: An indicator for the currently active menu item.
 * - `NavigationMenuViewport`: A viewport for displaying the menu content.
 */
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

/**
 * NavigationMenuList component for displaying a list of navigation items.
 * 
 * - Use the `NavigationMenuList` component to display a list of items within the navigation menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>} props - The properties to configure the NavigationMenuList component.
 * @returns {JSX.Element} The rendered NavigationMenuList component.
 */
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

/**
 * NavigationMenuTrigger component for toggling the visibility of the menu content.
 * 
 * - Use the `NavigationMenuTrigger` component to display a trigger button for the navigation menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>} props - The properties to configure the NavigationMenuTrigger component.
 * @returns {JSX.Element} The rendered NavigationMenuTrigger component.
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
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

/**
 * NavigationMenuContent component for displaying menu content.
 * 
 * - Use the `NavigationMenuContent` component to display the content of the navigation menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>} props - The properties to configure the NavigationMenuContent component.
 * @returns {JSX.Element} The rendered NavigationMenuContent component.
 */
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

/**
 * NavigationMenuViewport component for displaying the menu content in a viewport.
 * 
 * - Use the `NavigationMenuViewport` component to display the content of the navigation menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>} props - The properties to configure the NavigationMenuViewport component.
 * @returns {JSX.Element} The rendered NavigationMenuViewport component.
 */
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

/**
 * NavigationMenuIndicator component for displaying an indicator for the active menu item.
 * 
 * - Use the `NavigationMenuIndicator` component to indicate the currently active menu item.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>} props - The properties to configure the NavigationMenuIndicator component.
 * @returns {JSX.Element} The rendered NavigationMenuIndicator component.
 */
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

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
