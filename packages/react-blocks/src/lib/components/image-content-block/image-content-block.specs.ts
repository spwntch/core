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
  const tag1 = await canvas.findByText('DevOps');
  const tag2 = await canvas.findByText('UX/UI');
  const tag3 = await canvas.findByText('Lean Innovation');
  const tag4 = await canvas.findByText('Node.js');

  expect(tag1).toBeInTheDocument();
  expect(tag2).toBeInTheDocument();
  expect(tag3).toBeInTheDocument();
  expect(tag4).toBeInTheDocument();
  
  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playLeft = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is left aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-left');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playRight = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if content is right aligned
  const content = await canvas.findByText('Welcome to Spawntech');
  expect(content).toHaveClass('text-right');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playShort = async ({ canvasElement }: { canvasElement: HTMLElement }) => {

  // Check if height is applied correctly
  const container = canvasElement.querySelector('.image-content-header');
  expect(container).toHaveStyle('height: 180px');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTall = async ({ canvasElement }: { canvasElement: HTMLElement }) => {

  // Check if height is applied correctly
  const container = canvasElement.querySelector('.image-content-header');
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