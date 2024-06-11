import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Check if the title is present
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();

  // Check if the subtitle is present
  const subtitle = await canvas.findByText(
    'Pioneering the Future of Software Development'
  );
  expect(subtitle).toBeInTheDocument();

  // Check if the body content is present
  const bodyContent = await canvas.findByText(
    'Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development.'
  );
  expect(bodyContent).toBeInTheDocument();

  // Check if the bullets are present
  const bullet1 = await canvas.findByText('Innovative Solutions');
  expect(bullet1).toBeInTheDocument();
  const bullet2 = await canvas.findByText('Expert Team');
  expect(bullet2).toBeInTheDocument();
  const bullet3 = await canvas.findByText('Cutting-edge Technology');
  expect(bullet3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playHeroMode = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {

  // Check if the component has the hero class
  const container = canvasElement.querySelector('.h-screen');
  expect(container).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playLeft = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Check if the title is present and left-aligned
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();
  const titleParent = title.closest('.hAlign-left');
  expect(titleParent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playRight = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Check if the title is present and right-aligned
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();
  const titleParent = title.closest('.hAlign-right');
  expect(titleParent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playShort = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {

  // Check if the component has the correct height
  const container = canvasElement.querySelector('.container');
  expect(container).toHaveStyle('height: 240px');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTall = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {

  // Check if the component has the correct height
  const container = canvasElement.querySelector('.container');
  expect(container).toHaveStyle('height: 720px');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
