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
  
  // Check if the date is present
  const date = await canvas.findByText('2021-09-01');
  expect(date).toBeInTheDocument();
  
  // Check if the tags are present
  const tag1 = await canvas.findByText('ICP');
  expect(tag1).toBeInTheDocument();
  const tag2 = await canvas.findByText('Product Strategy');
  expect(tag2).toBeInTheDocument();
  const tag3 = await canvas.findByText('User Experience');
  expect(tag3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playNoTags = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the title is present
  const title = await canvas.findByText('Understanding Digital Experience');
  expect(title).toBeInTheDocument();
  
  // Check if the subtitle is present
  const subtitle = await canvas.findByText('How Digital Experience Drives Customer Engagement');
  expect(subtitle).toBeInTheDocument();
  
  // Check if the date is present
  const date = await canvas.findByText('2021-10-15');
  expect(date).toBeInTheDocument();
  
  // Check if the tags are absent
  const tagList = canvas.queryByRole('list');
  expect(tagList).not.toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
