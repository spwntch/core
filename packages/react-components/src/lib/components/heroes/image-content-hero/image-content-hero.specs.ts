import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Check for the presence of the hero title
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();

  // Check for the presence of the hero subtitle
  const subTitle = await canvas.findByText(
    'Pioneering the Future of Software Development'
  );
  expect(subTitle).toBeInTheDocument();

  // Check for the presence of the hero body content
  const bodyParagraph1 = await canvas.findByText(
    'Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development with an extensive library of reusable packages.'
  );
  const bodyParagraph2 = await canvas.findByText(
    'Born from a vision to expedite project delivery while slashing costs, Spawntech embodies innovation by leveraging these libraries, enabling projects to be delivered five times quicker and at a fraction of traditional costs.'
  );
  const bodyParagraph3 = await canvas.findByText(
    'Our mission is to deliver bespoke software solutions at unparalleled speed without compromising on quality or user satisfaction.'
  );

  expect(bodyParagraph1).toBeInTheDocument();
  expect(bodyParagraph2).toBeInTheDocument();
  expect(bodyParagraph3).toBeInTheDocument();

  // Check for the presence of bullet points
  const bullet1 = await canvas.findByText('Custom Software Development');
  const bullet2 = await canvas.findByText('DevOps and Lean CI/CD');
  const bullet3 = await canvas.findByText('Technical Excellence');

  expect(bullet1).toBeInTheDocument();
  expect(bullet2).toBeInTheDocument();
  expect(bullet3).toBeInTheDocument();

  // Check for accessibility violations
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
