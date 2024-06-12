import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the tags are present
  const tag1 = await canvas.findByText('Digital Experience');
  expect(tag1).toBeInTheDocument();

  const tag2 = await canvas.findByText('Customer Engagement');
  expect(tag2).toBeInTheDocument();

  const tag3 = await canvas.findByText('DX');
  expect(tag3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playManyTags = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if all the tags are present
  const tags = [
    'Digital Experience', 'Customer Engagement', 'DX',
    'Product Strategy', 'User Experience', 'ICP', 
    'Innovation', 'Agile', 'Lean', 'DevOps'
  ];

  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
