import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {canvasElement: HTMLElement}) => {
  const canvas = within(canvasElement);
  const bullet1 = await canvas.findByText('A first thought');
  const bullet2 = await canvas.findByText('A second');
  const bullet3 = await canvas.findByText('Yet another');

  // Initial state check
  expect(bullet1).toBeInTheDocument();
  expect(bullet2).toBeInTheDocument();
  expect(bullet3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playAccessibilityTest = async ({
  canvasElement,
}: {canvasElement: HTMLElement}) => {
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
