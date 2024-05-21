import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../../utils';

/**
 * Menubar component and its subcomponents for creating a navigational menu bar.
 *
 * The `Menubar` component provides a flexible and customizable menu bar system.
 * Use the various subcomponents to construct menus with items, sub-menus, radio groups, checkboxes, and more.
 *
 * - `MenubarTrigger`: The element that toggles the visibility of the menu.
 * - `MenubarContent`: The container for the menu items.
 * - `MenubarItem`: A standard item within the menu.
 * - `MenubarCheckboxItem`: An item that includes a checkbox.
 * - `MenubarRadioItem`: An item that behaves like a radio button.
 * - `MenubarLabel`: A label for grouping items within the menu.
 * - `MenubarSeparator`: A visual separator between groups of items.
 * - `MenubarShortcut`: A span element for displaying keyboard shortcuts.
 * - `MenubarGroup`: A grouping of multiple menu items.
 * - `MenubarPortal`: A portal for rendering the menu in a different part of the DOM.
 * - `MenubarSub`: A container for creating sub-menus.
 * - `MenubarSubTrigger`: The trigger for displaying sub-menus.
 * - `MenubarSubContent`: The container for sub-menu items.
 * - `MenubarRadioGroup`: A group of radio items.
 */
const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

/**
 * Menubar component for displaying a navigational menu bar.
 *
 * - Use the `Menubar` component as a wrapper for other menubar components such as `MenubarTrigger`, `MenubarContent`, etc.
 * - Supports additional `className` for custom styling.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>} props - The properties to configure the Menubar component.
 * @returns {JSX.Element} The rendered Menubar component.
 */
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

/**
 * MenubarTrigger component for toggling the visibility of the menu.
 *
 * - Use the `MenubarTrigger` component to display a trigger button for the menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>} props - The properties to configure the MenubarTrigger component.
 * @returns {JSX.Element} The rendered MenubarTrigger component.
 */
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

/**
 * MenubarSubTrigger component for displaying a sub-menu trigger.
 *
 * - Use the `MenubarSubTrigger` component to trigger nested sub-menus.
 * - Supports an optional `inset` prop for additional padding.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }} props - The properties to configure the MenubarSubTrigger component.
 * @returns {JSX.Element} The rendered MenubarSubTrigger component.
 */
const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

/**
 * MenubarSubContent component for displaying sub-menu content.
 *
 * - Use the `MenubarSubContent` component to display nested sub-menu content.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>} props - The properties to configure the MenubarSubContent component.
 * @returns {JSX.Element} The rendered MenubarSubContent component.
 */
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

/**
 * MenubarContent component for displaying menu content.
 *
 * - Use the `MenubarContent` component to display the content of the menu.
 * - Supports alignment and offset properties for positioning.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>} props - The properties to configure the MenubarContent component.
 * @returns {JSX.Element} The rendered MenubarContent component.
 */
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

/**
 * MenubarItem component for displaying an item in the menu.
 *
 * - Use the `MenubarItem` component to display an item within the menu.
 * - Supports an optional `inset` prop for additional padding.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { inset?: boolean }} props - The properties to configure the MenubarItem component.
 * @returns {JSX.Element} The rendered MenubarItem component.
 */
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

/**
 * MenubarCheckboxItem component for displaying a checkbox item in the menu.
 *
 * - Use the `MenubarCheckboxItem` component to display a checkbox within the menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>} props - The properties to configure the MenubarCheckboxItem component.
 * @returns {JSX.Element} The rendered MenubarCheckboxItem component.
 */
const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

/**
 * MenubarRadioItem component for displaying a radio item in the menu.
 *
 * - Use the `MenubarRadioItem` component to display a radio item within the menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>} props - The properties to configure the MenubarRadioItem component.
 * @returns {JSX.Element} The rendered MenubarRadioItem component.
 */
const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

/**
 * MenubarLabel component for displaying a label in the menu.
 *
 * - Use the `MenubarLabel` component to display a label within the menu.
 * - Supports an optional `inset` prop for additional padding.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & { inset?: boolean }} props - The properties to configure the MenubarLabel component.
 * @returns {JSX.Element} The rendered MenubarLabel component.
 */
const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

/**
 * MenubarSeparator component for displaying a separator in the menu.
 *
 * - Use the `MenubarSeparator` component to visually separate items within the menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>} props - The properties to configure the MenubarSeparator component.
 * @returns {JSX.Element} The rendered MenubarSeparator component.
 */
const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

/**
 * MenubarShortcut component for displaying a keyboard shortcut in the menu.
 *
 * - Use the `MenubarShortcut` component to display keyboard shortcuts next to menu items.
 *
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - The properties to configure the MenubarShortcut component.
 * @returns {JSX.Element} The rendered MenubarShortcut component.
 */
const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = 'MenubarShortcut';

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
};
