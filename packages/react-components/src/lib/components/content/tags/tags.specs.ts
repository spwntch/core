import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const tag1 = await canvas.findByText('tag1');
  const tag2 = await canvas.findByText('tag2');
  const tag3 = await canvas.findByText('tag3');

  // Initial state check
  expect(tag1).toBeInTheDocument();
  expect(tag2).toBeInTheDocument();
  expect(tag3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playAccessibilityTest = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
