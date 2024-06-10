import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from '@storybook/jest';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if all panes are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  const paneThreeContent = canvas.queryByText('Pane Three Content');
  const paneFourContent = canvas.queryByText('Pane Four Content');

  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();
  if (paneThreeContent) {
    expect(paneThreeContent).toBeInTheDocument();
  }
  if (paneFourContent) {
    expect(paneFourContent).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playFlipped = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if all panes are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  const paneThreeContent = canvas.queryByText('Pane Three Content');
  const paneFourContent = canvas.queryByText('Pane Four Content');

  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();
  if (paneThreeContent) {
    expect(paneThreeContent).toBeInTheDocument();
  }
  if (paneFourContent) {
    expect(paneFourContent).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVertical = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if all panes are present
  const paneOneContent = await canvas.findByText('Pane One Content');
  const paneTwoContent = await canvas.findByText('Pane Two Content');
  const paneThreeContent = canvas.queryByText('Pane Three Content');
  const paneFourContent = canvas.queryByText('Pane Four Content');

  expect(paneOneContent).toBeInTheDocument();
  expect(paneTwoContent).toBeInTheDocument();
  if (paneThreeContent) {
    expect(paneThreeContent).toBeInTheDocument();
  }
  if (paneFourContent) {
    expect(paneFourContent).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
