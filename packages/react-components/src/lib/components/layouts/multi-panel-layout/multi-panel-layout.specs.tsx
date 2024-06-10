import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Main Block Content');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Sub Block 1 Content');
  const subBlock2 = await canvas.findByText('Sub Block 2 Content');
  const subBlock3 = canvas.queryByText('Sub Block 3 Content');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();
  if (subBlock3) {
    expect(subBlock3).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playFlip = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Main Block Content');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Sub Block 1 Content');
  const subBlock2 = await canvas.findByText('Sub Block 2 Content');
  const subBlock3 = canvas.queryByText('Sub Block 3 Content');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();
  if (subBlock3) {
    expect(subBlock3).toBeInTheDocument();
  }

  // Ensure the layout is flipped
  const subBlockContainer = mainBlock.parentElement?.previousElementSibling || mainBlock.parentElement?.nextElementSibling;
  expect(subBlockContainer).toBeInTheDocument();
  expect(subBlockContainer?.firstChild).toHaveTextContent('Sub Block 1 Content');
  expect(subBlockContainer?.childNodes[1]).toHaveTextContent('Sub Block 2 Content');
  if (subBlock3) {
    expect(subBlockContainer?.lastChild).toHaveTextContent('Sub Block 3 Content');
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playTwoSubBlocks = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Main Block Content');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub blocks are present
  const subBlock1 = await canvas.findByText('Sub Block 1 Content');
  const subBlock2 = await canvas.findByText('Sub Block 2 Content');

  expect(subBlock1).toBeInTheDocument();
  expect(subBlock2).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playOneSubBlock = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if main block is present
  const mainBlock = await canvas.findByText('Main Block Content');
  expect(mainBlock).toBeInTheDocument();

  // Check if sub block is present
  const subBlock1 = await canvas.findByText('Sub Block 1 Content');
  expect(subBlock1).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
