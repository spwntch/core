// import { expect } from '@storybook/jest';
// import { within } from '@storybook/testing-library';
// import { axe, toHaveNoViolations } from 'jest-axe';

// expect.extend(toHaveNoViolations);

// const openMenubarAndCheckItems = async (canvasElement: HTMLElement) => {
//   const canvas = within(canvasElement);
//   const button = await canvas.findByRole('menuitem', { name: /file/i });

//   // Check initial state
//   expect(button).toBeInTheDocument();

//   // Click the button to open the menubar
//   await button.click();

//   // Check for the presence of menu items
//   // for (const item of items) {
//   // const menuItem = await canvas.findByRole('menuitem', { name: item });
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
//   await openMenubarAndCheckItems(canvasElement, ['New File', 'Open File']);
// };

// export const playWithVariousItems = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   await openMenubarAndCheckItems(canvasElement, [
//     'New File',
//     'Open File',
//     'Save',
//     'Undo',
//     'Redo',
//     'Cut',
//     'Copy',
//     'Paste',
//     'Option 1',
//     'Option 2',
//     'Option 3',
//     'View 1',
//     'View 2',
//     'View 3',
//     'Tool 1',
//     'More Tools',
//     'Tool 2',
//     'Tool 3',
//     'Tool 4',
//   ]);
// };
