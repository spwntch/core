import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByText('Button');

  // Initial state check
  expect(button).toBeInTheDocument();

  // Accessibility test
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVariants = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const defaultButton = await canvas.findByText('Default');
  const destructiveButton = await canvas.findByText('Destructive');
  const outlineButton = await canvas.findByText('Outline');
  const secondaryButton = await canvas.findByText('Secondary');
  const ghostButton = await canvas.findByText('Ghost');
  const linkButton = await canvas.findByText('Link');

  // Initial state check
  expect(defaultButton).toBeInTheDocument();
  expect(destructiveButton).toBeInTheDocument();
  expect(outlineButton).toBeInTheDocument();
  expect(secondaryButton).toBeInTheDocument();
  expect(ghostButton).toBeInTheDocument();
  expect(linkButton).toBeInTheDocument();

  // Accessibility test
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playSizes = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const defaultSizeButton = await canvas.findByText('Default');
  const smallSizeButton = await canvas.findByText('Small');
  const largeSizeButton = await canvas.findByText('Large');
  const iconSizeButton = await canvas.findByRole('button', { name: /heart/i });

  // Initial state check
  expect(defaultSizeButton).toBeInTheDocument();
  expect(smallSizeButton).toBeInTheDocument();
  expect(largeSizeButton).toBeInTheDocument();
  expect(iconSizeButton).toBeInTheDocument();

  // Accessibility test
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};