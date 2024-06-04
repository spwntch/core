import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Our Partners');
  expect(title).toBeInTheDocument();

  const logos = canvas.getAllByRole('img');
  expect(logos).toHaveLength(4);

  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playWithTitle = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Our Partners');
  expect(title).toBeInTheDocument();

  const logos = canvas.getAllByRole('img');
  expect(logos).toHaveLength(4);
  
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playWithoutTitle = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const logos = canvas.getAllByRole('img');
  expect(logos).toHaveLength(4);
  
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};