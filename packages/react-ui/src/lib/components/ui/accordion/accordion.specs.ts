import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const trigger1 = await canvas.findByText('Trigger 1');
  const trigger2 = await canvas.findByText('Trigger 2');

  // Initial state check
  expect(await canvas.findByText('Content 1')).toBeInTheDocument();
  expect(canvas.queryByText('Content 2')).not.toBeInTheDocument();

  // Interact with the component
  await userEvent.click(trigger1); // Collapse Content 1
  expect(canvas.queryByText('Content 1')).not.toBeInTheDocument();
  expect(canvas.queryByText('Content 2')).not.toBeInTheDocument();

  await userEvent.click(trigger2); // Expand Content 2
  expect(canvas.queryByText('Content 1')).not.toBeInTheDocument();
  expect(await canvas.findByText('Content 2')).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playMultipleItems = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const trigger1 = await canvas.findByText('Trigger 1');
  const trigger2 = await canvas.findByText('Trigger 2');
  const trigger3 = await canvas.findByText('Trigger 3');

  // Check initial state
  expect(trigger1).toBeInTheDocument();
  expect(trigger2).toBeInTheDocument();
  expect(trigger3).toBeInTheDocument();
  expect(canvas.queryByText('Content 1')).toBeInTheDocument();
  expect(canvas.queryByText('Content 2')).not.toBeInTheDocument();
  expect(canvas.queryByText('Content 3')).not.toBeInTheDocument();

  // Interact with the component
  await userEvent.click(trigger2);
  expect(canvas.queryByText('Content 1')).toBeInTheDocument();
  expect(await canvas.findByText('Content 2')).toBeInTheDocument();
  expect(canvas.queryByText('Content 3')).not.toBeInTheDocument();

  await userEvent.click(trigger3);
  expect(canvas.queryByText('Content 1')).toBeInTheDocument();
  expect(canvas.queryByText('Content 2')).toBeInTheDocument();
  expect(await canvas.findByText('Content 3')).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playAccessibilityTest = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playEmptyAccordion = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  expect(canvas.queryByText('Trigger 1')).not.toBeInTheDocument();
};

export const playLargeNumberOfItems = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  for (let i = 0; i < 50; i++) {
    const trigger = await canvas.findByText(`Trigger ${i}`);
    await userEvent.click(trigger);
    expect(await canvas.findByText(`Content ${i}`)).toBeInTheDocument();
  }
};