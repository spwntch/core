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

export const playShort = async ({ canvasElement }: { canvasElement: HTMLElement }) => {

  // Check if height is applied correctly
  const container = canvasElement.querySelector('.container');
  expect(container).toHaveStyle('height: 180px');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTall = async ({ canvasElement }: { canvasElement: HTMLElement }) => {

  // Check if height is applied correctly
  const container = canvasElement.querySelector('.container');
  expect(container).toHaveStyle('height: 480px');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playHeroMode = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if title is present
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();

  // Check if subtitle is present
  const subTitle = await canvas.findByText('Pioneering the Future of Software Development');
  expect(subTitle).toBeInTheDocument();

  // Check if tags are present
  const tags = ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }

  // Check if the element has the class indicating hero mode
  const container = canvasElement.querySelector('.h-screen');
  expect(container).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
