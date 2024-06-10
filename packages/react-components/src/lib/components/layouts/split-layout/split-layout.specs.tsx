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

  // Ensure the layout is flipped
  const container = paneOneContent.parentElement?.parentElement;
  if (container) {
    const children = Array.from(container.children);
    if (children.length === 2) {
      expect(children[0]).toHaveTextContent('Pane Two Content');
      expect(children[1]).toHaveTextContent('Pane One Content');
    } else if (children.length === 3) {
      expect(children[0]).toHaveTextContent('Pane Two Content');
      expect(children[1]).toHaveTextContent('Pane Three Content');
      expect(children[2]).toHaveTextContent('Pane One Content');
    } else if (children.length === 4) {
      expect(children[0]).toHaveTextContent('Pane Two Content');
      expect(children[1]).toHaveTextContent('Pane Three Content');
      expect(children[2]).toHaveTextContent('Pane Four Content');
      expect(children[3]).toHaveTextContent('Pane One Content');
    }
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
