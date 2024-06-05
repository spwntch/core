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
  const button = await canvas.findByRole('button', { name: /open menu/i });

  // Initial state check
  expect(button).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
