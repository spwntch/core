
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const slide1 = await canvas.findByAltText('Landscape Image 1');
  const slide2 = await canvas.findByAltText('Landscape Image 2');
  const slide3 = await canvas.findByAltText('Landscape Image 3');
  const slide4 = await canvas.findByAltText('Landscape Image 4');
  const slide5 = await canvas.findByAltText('Landscape Image 5');
  const slide6 = await canvas.findByAltText('Landscape Image 6');
  const slide7 = await canvas.findByAltText('Landscape Image 7');
  const slide8 = await canvas.findByAltText('Landscape Image 8');

  // Check initial state
  expect(slide1).toBeInTheDocument();
  expect(slide2).toBeInTheDocument();
  expect(slide3).toBeInTheDocument();
  expect(slide4).toBeInTheDocument();
  expect(slide5).toBeInTheDocument();
  expect(slide6).toBeInTheDocument();
  expect(slide7).toBeInTheDocument();
  expect(slide8).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
