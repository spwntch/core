import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the grid contains articles
  const articleTitle = await canvas.findByText('The Real Reason You Need an ICP');
  expect(articleTitle).toBeInTheDocument();
  
  // Check if the grid contains multiple articles
  const articles = await canvas.findAllByRole('article');
  expect(articles.length).toBeGreaterThan(1);

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playEmpty = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the grid displays "no posts" message
  const noPostsMessage = await canvas.findByText('no posts');
  expect(noPostsMessage).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playSingleArticle = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the grid contains a single article
  const articleTitle = await canvas.findByText('The Real Reason You Need an ICP');
  expect(articleTitle).toBeInTheDocument();
  
  const articles = await canvas.findAllByRole('article');
  expect(articles.length).toBe(1);

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
