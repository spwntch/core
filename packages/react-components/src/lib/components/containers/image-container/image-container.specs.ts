import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from '@storybook/jest';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the card content is present
  const content = await canvas.findByText('Your Content Here');
  expect(content).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
