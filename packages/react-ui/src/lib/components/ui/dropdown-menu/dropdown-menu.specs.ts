// import { expect } from '@storybook/jest';
// import { within } from '@storybook/testing-library';
// import { axe, toHaveNoViolations } from 'jest-axe';

// expect.extend(toHaveNoViolations);

// const openDropdownMenuAndCheckItems = async (canvasElement: HTMLElement) => {
//   const canvas = within(canvasElement);
//   const button = await canvas.findByRole('button', { name: /open menu/i });

//   // Check initial state
//   expect(button).toBeInTheDocument();

//   // Click the button to open the dropdown menu
//   await button.click();

//   // Check for the presence of menu items
//   // for (const item of items) {
//   // const menuItem = await canvas.findByDisplayValue(item);
//   // expect(menuItem).toBeInTheDocument();
//   // }

//   // Accessibility check
//   const results = await axe(canvasElement);
//   expect(results).toHaveNoViolations();
// };

// export const playBasic = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   // await openDropdownMenuAndCheckItems(canvasElement, [
//   //   'Item 1',
//   //   'Item 2',
//   //   'Item 3',
//   // ]);
// };

// export const playWithGroups = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   // await openDropdownMenuAndCheckItems(canvasElement, [
//   //   'Group Item 1',
//   //   'Group Item 2',
//   //   'Group Item 3',
//   //   'Group Item 4',
//   // ]);
// };

// export const playWithCheckboxes = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   // await openDropdownMenuAndCheckItems(canvasElement, [
//   //   'Item 1',
//   //   'Item 2',
//   //   'Item 3',
//   // ]);
// };

// export const playWithRadios = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   // await openDropdownMenuAndCheckItems(canvasElement, [
//   //   'Item 1',
//   //   'Item 2',
//   //   'Item 3',
//   // ]);
// };

// export const playWithSubmenus = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   // await openDropdownMenuAndCheckItems(canvasElement, [
//   //   'Item 1',
//   //   'Submenu',
//   //   'Submenu Item 1',
//   //   'Submenu Item 2',
//   //   'Item 2',
//   // ]);
// };
