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

  // Check if body content is present
  const body = await canvas.findByText('Our Mission');
  expect(body).toBeInTheDocument();

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
