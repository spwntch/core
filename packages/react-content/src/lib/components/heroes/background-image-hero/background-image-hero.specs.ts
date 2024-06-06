import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const heading = await canvas.findByRole('heading', { name: /welcome to our site/i });

  // Initial state check
  expect(heading).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
