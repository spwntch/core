import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const openSheetAndCheckContent = async (canvasElement: HTMLElement, title: string, description: string) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button', { name: /open sheet/i });

  // Check initial state
  expect(button).toBeInTheDocument();

  // Click the button to open the sheet
  await button.click();

  // Check for the presence of sheet content
  const sheetTitle = await canvas.findByText(title);
  const sheetDescription = await canvas.findByText(description);

  expect(sheetTitle).toBeInTheDocument();
  expect(sheetDescription).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await openSheetAndCheckContent(canvasElement, 'Sheet Title', 'Sheet description goes here.');
};

export const playWithHelpContent = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button', { name: /need help/i });

  // Check initial state
  expect(button).toBeInTheDocument();

  // Click the button to open the sheet
  await button.click();

  // Check for the presence of sheet content
  const sheetTitle = await canvas.findByText('Help & Support');
  const sheetDescription = await canvas.findByText('Find answers to common questions and get support.');
  const helpSections = [
    'How to use this feature?',
    'Where can I find more information?',
    'Who can I contact for support?'
  ];

  expect(sheetTitle).toBeInTheDocument();
  expect(sheetDescription).toBeInTheDocument();

  for (const section of helpSections) {
    const sectionTitle = await canvas.findByText(section);
    expect(sectionTitle).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};