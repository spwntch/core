import { expect } from '@storybook/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // const canvas = within(canvasElement);
  // const logo = canvas.getByAltText('Brand Logo');
  // expect(logo).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playDarkMode = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  // const canvas = within(canvasElement);
  // const logo = canvas.getByAltText('Brand Logo');
  // expect(logo).toBeInTheDocument();

  // Ensure the logo switches to dark mode
  // const darkLogo = canvas.getByRole('img', { name: /Brand Logo/i });
  // expect(darkLogo).toHaveAttribute('src', expect.stringContaining('dark'));

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};