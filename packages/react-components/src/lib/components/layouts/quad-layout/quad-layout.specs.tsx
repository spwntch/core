import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from '@storybook/jest';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if Pane One, Pane Two, Pane Three, and Pane Four are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  const paneThreeContent = await canvas.findByText('Pane Three Content');
  const paneFourContent = await canvas.findByText('Pane Four Content');
  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();
  expect(paneThreeContent).toBeInTheDocument();
  expect(paneFourContent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playFlipped = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if Pane One, Pane Two, Pane Three, and Pane Four are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  const paneThreeContent = await canvas.findByText('Pane Three Content');
  const paneFourContent = await canvas.findByText('Pane Four Content');
  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();
  expect(paneThreeContent).toBeInTheDocument();
  expect(paneFourContent).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
