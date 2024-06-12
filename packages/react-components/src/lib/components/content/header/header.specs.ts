import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Spawntech Company Overview');
  const subTitle = await canvas.findByText('Pioneering a transformative approach to software development');

  // Initial state check
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playWithTags = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = await canvas.findByText('Spawntech Company Overview');
  const subTitle = await canvas.findByText('Pioneering a transformative approach to software development');
  const tag1 = await canvas.findByText('DevOps');
  const tag2 = await canvas.findByText('UX/UI');
  const tag3 = await canvas.findByText('Lean Innovation');
  const tag4 = await canvas.findByText('Node.js');

  // Initial state check
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(tag1).toBeInTheDocument();
  expect(tag2).toBeInTheDocument();
  expect(tag3).toBeInTheDocument();
  expect(tag4).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
