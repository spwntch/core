import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: {canvasElement: HTMLElement}) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Our Partners');

  // Initial state check
  expect(title).toBeInTheDocument();

  // Accessibility test
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};