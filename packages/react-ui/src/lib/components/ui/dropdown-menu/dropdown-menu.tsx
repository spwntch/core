import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../../utils/cn';

/**
 * DropdownMenu component and its subcomponents for creating complex dropdown menus.
 *
 * The `DropdownMenu` component provides a flexible and customizable dropdown menu system.
 * Use the various subcomponents to construct dropdown menus with items, sub-menus, radio groups, checkboxes, and more.
 *
 * - `DropdownMenuTrigger`: The element that toggles the visibility of the dropdown menu.
 * - `DropdownMenuContent`: The container for the dropdown menu items.
 * - `DropdownMenuItem`: A standard item within the dropdown menu.
 * - `DropdownMenuCheckboxItem`: An item that includes a checkbox.
 * - `DropdownMenuRadioItem`: An item that behaves like a radio button.
 * - `DropdownMenuLabel`: A label for grouping items within the dropdown.
 * - `DropdownMenuSeparator`: A visual separator between groups of items.
 * - `DropdownMenuShortcut`: A span element for displaying keyboard shortcuts.
 * - `DropdownMenuGroup`: A grouping of multiple dropdown items.
 * - `DropdownMenuPortal`: A portal for rendering the dropdown menu in a different part of the DOM.
 * - `DropdownMenuSub`: A container for creating sub-menus.
 * - `DropdownMenuSubTrigger`: The trigger for displaying sub-menus.
 * - `DropdownMenuSubContent`: The container for sub-menu items.
 * - `DropdownMenuRadioGroup`: A group of radio items.
 */
const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * DropdownMenuSubTrigger component for displaying a sub-menu trigger.
 *
 * - Use the `DropdownMenuSubTrigger` component to trigger nested dropdown menus.
 * - Supports an optional `inset` prop for additional padding.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }} props - The properties to configure the DropdownMenuSubTrigger component.
 * @returns {JSX.Element} The rendered DropdownMenuSubTrigger component.
 */
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

/**
 * DropdownMenuSubContent component for displaying sub-menu content.
 *
 * - Use the `DropdownMenuSubContent` component to display nested dropdown menu content.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>} props - The properties to configure the DropdownMenuSubContent component.
 * @returns {JSX.Element} The rendered DropdownMenuSubContent component.
 */
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

/**
 * DropdownMenuContent component for displaying dropdown menu content.
 *
 * - Use the `DropdownMenuContent` component to display the content of the dropdown menu.
 * - Supports an optional `sideOffset` prop to adjust the offset of the menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>} props - The properties to configure the DropdownMenuContent component.
 * @returns {JSX.Element} The rendered DropdownMenuContent component.
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * DropdownMenuItem component for displaying an item in the dropdown menu.
 *
 * - Use the `DropdownMenuItem` component to display an item within the dropdown menu.
 * - Supports an optional `inset` prop for additional padding.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }} props - The properties to configure the DropdownMenuItem component.
 * @returns {JSX.Element} The rendered DropdownMenuItem component.
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * DropdownMenuCheckboxItem component for displaying a checkbox item in the dropdown menu.
 *
 * - Use the `DropdownMenuCheckboxItem` component to display a checkbox within the dropdown menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>} props - The properties to configure the DropdownMenuCheckboxItem component.
 * @returns {JSX.Element} The rendered DropdownMenuCheckboxItem component.
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * DropdownMenuRadioItem component for displaying a radio item in the dropdown menu.
 *
 * - Use the `DropdownMenuRadioItem` component to display a radio item within the dropdown menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>} props - The properties to configure the DropdownMenuRadioItem component.
 * @returns {JSX.Element} The rendered DropdownMenuRadioItem component.
 */
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * DropdownMenuLabel component for displaying a label in the dropdown menu.
 *
 * - Use the `DropdownMenuLabel` component to display a label within the dropdown menu.
 * - Supports an optional `inset` prop for additional padding.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }} props - The properties to configure the DropdownMenuLabel component.
 * @returns {JSX.Element} The rendered DropdownMenuLabel component.
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * DropdownMenuSeparator component for displaying a separator in the dropdown menu.
 *
 * - Use the `DropdownMenuSeparator` component to visually separate items within the dropdown menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>} props - The properties to configure the DropdownMenuSeparator component.
 * @returns {JSX.Element} The rendered DropdownMenuSeparator component.
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/**
 * DropdownMenuShortcut component for displaying a keyboard shortcut in the dropdown menu.
 *
 * - Use the `DropdownMenuShortcut` component to display keyboard shortcuts next to menu items.
 *
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - The properties to configure the DropdownMenuShortcut component.
 * @returns {JSX.Element} The rendered DropdownMenuShortcut component.
 */
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

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
};
