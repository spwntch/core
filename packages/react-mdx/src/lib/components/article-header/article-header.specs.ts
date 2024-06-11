import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the title is present
  const title = await canvas.findByText('The Real Reason You Need an ICP');
  expect(title).toBeInTheDocument();

  // Check if the subtitle is present
  const subtitle = await canvas.findByText("You've heard the term, but here's the real reason that not having one is holding you back.");
  expect(subtitle).toBeInTheDocument();

  // Check if tags are present
  const tags = ['ICP', 'Product Strategy', 'User Experience'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playWithBackButton = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the back button is present
  const backButton = await canvas.findByText('Back to Articles');
  expect(backButton).toBeInTheDocument();

  // Check if the title is present
  const title = await canvas.findByText('The Real Reason You Need an ICP');
  expect(title).toBeInTheDocument();

  // Check if the subtitle is present
  const subtitle = await canvas.findByText("You've heard the term, but here's the real reason that not having one is holding you back.");
  expect(subtitle).toBeInTheDocument();

  // Check if tags are present
  const tags = ['ICP', 'Product Strategy', 'User Experience'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
