import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  
  // Check if the content is present
  const content = await canvas.findByText('This is the content of the post.');
  expect(content).toBeInTheDocument();

  // Check if the TOC is present
  const tocItem = await canvas.findByText('Introduction');
  expect(tocItem).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
