import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  
  // Check if title is present
  const title = await canvas.findByText('Discover Remote Furniture');
  expect(title).toBeInTheDocument();
  
  // Check if subtitle is present
  const subTitle = await canvas.findByText('Crafted for Remote Landscapes');
  expect(subTitle).toBeInTheDocument();

  // Check if tags are present
  const tags = ['Remote', 'Furniture', 'Craftsmanship', 'Landscapes'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }
  
  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playHeroMode = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if height is applied correctly
  const container = canvasElement.querySelector('.container');
  expect(container).toHaveClass('h-screen');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
