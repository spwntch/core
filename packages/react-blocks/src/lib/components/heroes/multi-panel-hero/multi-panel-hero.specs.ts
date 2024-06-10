import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  
  // Check if title is present
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();
  
  // Check if subtitle is present
  const subTitle = await canvas.findByText('Pioneering the Future of Software Development');
  expect(subTitle).toBeInTheDocument();
  
  // Check if body content is present
  const body = await canvas.findByText('Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development.');
  expect(body).toBeInTheDocument();

  // Check if tags are present
  const tags = ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }
  
  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTopLeft = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is top-left aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-left');
  expect(content.parentElement).toHaveClass('align-top');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTopCenter = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is top-center aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-center');
  expect(content.parentElement).toHaveClass('align-top');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTopRight = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is top-right aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-right');
  expect(content.parentElement).toHaveClass('align-top');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playMiddleLeft = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is middle-left aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-left');
  expect(content.parentElement).toHaveClass('align-middle');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playMiddleCenter = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is middle-center aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-center');
  expect(content.parentElement).toHaveClass('align-middle');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playMiddleRight = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is middle-right aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-right');
  expect(content.parentElement).toHaveClass('align-middle');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playBottomLeft = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is bottom-left aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-left');
  expect(content.parentElement).toHaveClass('align-bottom');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playBottomCenter = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is bottom-center aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-center');
  expect(content.parentElement).toHaveClass('align-bottom');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playBottomRight = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is bottom-right aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-right');
  expect(content.parentElement).toHaveClass('align-bottom');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
