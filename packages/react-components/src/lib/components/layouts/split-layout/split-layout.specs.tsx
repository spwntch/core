import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SplitLayout } from './split-layout';
import { Meta, StoryObj } from '@storybook/react';

expect.extend(toHaveNoViolations);

const meta: Meta<typeof SplitLayout> = {
  title: 'components/layouts/split-layout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SplitLayout>;

const paneOne = (
  <div className="bg-gray-200 h-full w-full flex items-center justify-center">
    <div>Pane One Content</div>
  </div>
);
const paneTwo = (
  <div className="bg-gray-300 h-full w-full flex items-center justify-center">
    <div>Pane Two Content</div>
  </div>
);

const args = {
  split: 'horizontal' as 'horizontal' | 'vertical',
  containers: [paneOne, paneTwo],
};

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};

export const VerticalSplit: Story = {
  args: {
    split: 'vertical',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};

export const FlippedHorizontalSplit: Story = {
  args: {
    flip: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};

export const FlippedVerticalSplit: Story = {
  args: {
    split: 'vertical',
    flip: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};
