import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Blog Post Title');
  const description = await canvas.findByText('Author Name - Date');
  const content = await canvas.findByText(/Lorem ipsum dolor sit amet/);
  const footer = await canvas.findByText('Read More');

  // Check initial state
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playHeaderContent = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Blog Post Title');
  const description = await canvas.findByText('Author Name - Date');
  const content = await canvas.findByText(/Lorem ipsum dolor sit amet/);

  // Check initial state
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(content).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playContentFooter = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const content = await canvas.findByText(/Lorem ipsum dolor sit amet/);
  const footer = await canvas.findByText('Read More');

  // Check initial state
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playWithImage = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Blog Post Title');
  const description = await canvas.findByText('Author Name - Date');
  const image = await canvas.findByAltText('Landscape Image 1');
  const content = await canvas.findByText(/Lorem ipsum dolor sit amet/);
  const footer = await canvas.findByText('Read More');

  // Check initial state
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};