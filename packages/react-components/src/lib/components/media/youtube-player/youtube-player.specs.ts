import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const thumbnail = canvas.getByAltText('youtube-vid-placeholder');
  expect(thumbnail).toBeInTheDocument();

  // Simulate click to display YouTube player
  await thumbnail.click();
  const iframe = canvas.getByTitle('YouTube video player');
  expect(iframe).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};