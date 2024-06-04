import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const badge = await canvas.findByText('Badge');

  // Initial state check
  expect(badge).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVariants = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const defaultBadge = await canvas.findByText('Default');
  const secondaryBadge = await canvas.findByText('Secondary');
  const destructiveBadge = await canvas.findByText('Destructive');
  const outlineBadge = await canvas.findByText('Outline');

  // Check initial state
  expect(defaultBadge).toBeInTheDocument();
  expect(secondaryBadge).toBeInTheDocument();
  expect(destructiveBadge).toBeInTheDocument();
  expect(outlineBadge).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};