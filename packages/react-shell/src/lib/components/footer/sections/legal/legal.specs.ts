import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const privacyLink = await canvas.findByText('Privacy Policy');

  // Initial state check
  expect(privacyLink).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playAccessibilityTest = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
