import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Contact');
  const websiteLink = await canvas.findByText(/.+/);

  // Initial state check
  expect(title).toBeInTheDocument();
  expect(websiteLink).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playAccessibilityTest = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
