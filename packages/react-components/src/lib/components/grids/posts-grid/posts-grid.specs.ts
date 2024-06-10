import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  
  // Check if the first post title is present
  const title1 = await canvas.findByText('First Post');
  expect(title1).toBeInTheDocument();

  // Check if the second post title is present
  const title2 = await canvas.findByText('Second Post');
  expect(title2).toBeInTheDocument();

  // Check if the third post title is present
  const title3 = await canvas.findByText('Third Post');
  expect(title3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
