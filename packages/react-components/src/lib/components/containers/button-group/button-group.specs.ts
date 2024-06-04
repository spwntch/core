import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button1 = await canvas.findByText('Button 1');
  const button2 = await canvas.findByText('Button 2');

  // Check initial state
  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playStacked = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button1 = await canvas.findByText('Button 1');
  const button2 = await canvas.findByText('Button 2');

  // Check initial state
  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};