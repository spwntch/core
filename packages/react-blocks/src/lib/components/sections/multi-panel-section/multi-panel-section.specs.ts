import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Discover Remote Furniture');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Our Mission');
  const subBlock2 = await canvas.findByText('Why Choose Us?');
  const subBlock3 = await canvas.findByText('Contact Us');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();
  expect(subBlock3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playHeroMode = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the component has full screen height
  const container = canvasElement.querySelector('.container');
  expect(container).toHaveClass('h-screen');

  // Check if main block is present
  const mainBlock = await canvas.findByText('Discover Remote Furniture');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Our Mission');
  const subBlock2 = await canvas.findByText('Why Choose Us?');
  const subBlock3 = await canvas.findByText('Contact Us');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();
  expect(subBlock3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playFlipped = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Discover Remote Furniture');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Our Mission');
  const subBlock2 = await canvas.findByText('Why Choose Us?');
  const subBlock3 = await canvas.findByText('Contact Us');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();
  expect(subBlock3).toBeInTheDocument();

  // Ensure the layout is flipped
  const subBlockContainer = mainBlock.parentElement?.previousElementSibling;
  expect(subBlockContainer).toBeInTheDocument();
  expect(subBlockContainer?.firstChild).toHaveTextContent('Our Mission');
  expect(subBlockContainer?.lastChild).toHaveTextContent('Contact Us');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVertical = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Discover Remote Furniture');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Our Mission');
  const subBlock2 = await canvas.findByText('Why Choose Us?');
  const subBlock3 = await canvas.findByText('Contact Us');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();
  expect(subBlock3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
