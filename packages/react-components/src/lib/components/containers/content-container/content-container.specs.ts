import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const announcement = await canvas.findByText('Spawntech is transforming software development');
  const title = await canvas.findByText('Spawntech Company Overview');
  const subTitle = await canvas.findByText('Pioneering a transformative approach to software development');
  const paragraph1 = await canvas.findByText('Spawntech pioneers transformative software development, blending advanced DevOps, precise UX implementation, and customized development with reusable packages. Our approach integrates the latest technologies to ensure robust and scalable solutions that meet the evolving needs of our clients. By utilizing a comprehensive library of reusable packages, we can accelerate the development process and maintain high standards of quality and performance.');
  const paragraph2 = await canvas.findByText('Innovation at unparalleled speed.');
  const paragraph3 = await canvas.findByText('Our mission is to deliver bespoke software solutions at unparalleled speed without compromising on quality or user satisfaction. By championing lean innovation and a product-led approach, we transform our clients\' complex challenges into their greatest successes. Our team of experts works closely with clients to understand their unique requirements and deliver tailored solutions that drive business growth and enhance user experience. We pride ourselves on our ability to turn visionary ideas into reality, helping our clients achieve their strategic objectives with precision and agility.');
  const tag1 = await canvas.findByText('DevOps');
  const tag2 = await canvas.findByText('UX/UI');
  const tag3 = await canvas.findByText('Lean Innovation');
  const tag4 = await canvas.findByText('Node.js');
  const bullet1 = await canvas.findByText('Rocket to the moon');
  const bullet2 = await canvas.findByText('Reach for the stars');
  const bullet3 = await canvas.findByText('Bullet point 3');

  // Initial state check
  expect(announcement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(paragraph1).toBeInTheDocument();
  expect(paragraph2).toBeInTheDocument();
  expect(paragraph3).toBeInTheDocument();
  expect(tag1).toBeInTheDocument();
  expect(tag2).toBeInTheDocument();
  expect(tag3).toBeInTheDocument();
  expect(tag4).toBeInTheDocument();
  expect(bullet1).toBeInTheDocument();
  expect(bullet2).toBeInTheDocument();
  expect(bullet3).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
