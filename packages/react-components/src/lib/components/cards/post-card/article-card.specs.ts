import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  
  // Check if the title is present
  const title = await canvas.findByText('Example Post Title');
  expect(title).toBeInTheDocument();

  // Check if the date is present
  const date = await canvas.findByText('June 10, 2024');
  expect(date).toBeInTheDocument();

  // Check if the subtitle is present
  const subtitle = await canvas.findByText('This is an example of a post subtitle.');
  expect(subtitle).toBeInTheDocument();

  // Check if the tags are present
  const tags = ['Example', 'Storybook'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }

  // Check if the image is present
  const image = await canvas.findByAltText('post cover image');
  expect(image).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
