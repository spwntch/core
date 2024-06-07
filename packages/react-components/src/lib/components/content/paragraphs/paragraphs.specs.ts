import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const paragraph1 = await canvas.findByText('Spawntech pioneers transformative software development, blending advanced DevOps, precise UX implementation, and customized development with reusable packages.');
  const paragraph2 = await canvas.findByText('Spawntech embodies innovation by leveraging these libraries, enabling projects to be delivered five times quicker and at a fraction of traditional costs.');
  const paragraph3 = await canvas.findByText('Our mission is to deliver bespoke software solutions at unparalleled speed without compromising on quality or user satisfaction. By championing lean innovation and a product-led approach, we transform our clients\' complex challenges into their greatest successes.');

  // Initial state check
  expect(paragraph1).toBeInTheDocument();
  expect(paragraph2).toBeInTheDocument();
  expect(paragraph3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
