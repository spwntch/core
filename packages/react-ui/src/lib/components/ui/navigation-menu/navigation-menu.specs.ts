import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const openNavigationMenuAndCheckItems = async (
  canvasElement: HTMLElement,
  items: string[]
) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button', { name: /services/i });

  // Check initial state
  expect(button).toBeInTheDocument();

  // Click the button to open the navigation menu
  await button.click();

  // Check for the presence of menu items
  for (const item of items) {
    const menuItem = await canvas.findByText(item);
    expect(menuItem).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  await openNavigationMenuAndCheckItems(canvasElement, [
    'Consulting',
    'Implementation',
    'Support',
  ]);
};

export const playWithTraditionalSubMenu = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button', { name: /services/i });

  // Check initial state
  expect(button).toBeInTheDocument();

  // Click the button to open the navigation menu
  await button.click();

  // Check for the presence of menu items
  const items = ['Consulting', 'Implementation', 'Support'];
  for (const item of items) {
    const menuItem = await canvas.findByText(item);
    expect(menuItem).toBeInTheDocument();
  }

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();

  // Check sub-menu items
  const subMenuButton = await canvas.findByRole('button', {
    name: /industries/i,
  });
  expect(subMenuButton).toBeInTheDocument();
  await subMenuButton.click();

  const subMenuItems = ['Healthcare', 'Finance', 'Education'];
  for (const subMenuItem of subMenuItems) {
    const menuItem = await canvas.findByText(subMenuItem);
    expect(menuItem).toBeInTheDocument();
  }
};
