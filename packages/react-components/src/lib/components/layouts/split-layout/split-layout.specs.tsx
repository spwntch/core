import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from '@storybook/jest';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if Pane One and Pane Two are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playFlipped = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if Pane One and Pane Two are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVertical = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if Pane One and Pane Two are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
