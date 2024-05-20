import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Components/Badge",
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A small, pill-shaped component used to display a count or label.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * Default story for the Badge component.
 */
export const Default: Story = {
  render: (args) => <Badge {...args}>Default</Badge>,
  args: {
    variant: "default",
  },
};

/**
 * Secondary variant of the Badge component.
 */
export const Secondary: Story = {
  render: (args) => <Badge {...args}>Secondary</Badge>,
  args: {
    variant: "secondary",
  },
};

/**
 * Destructive variant of the Badge component.
 */
export const Destructive: Story = {
  render: (args) => <Badge {...args}>Destructive</Badge>,
  args: {
    variant: "destructive",
  },
};

/**
 * Outline variant of the Badge component.
 */
export const Outline: Story = {
  render: (args) => <Badge {...args}>Outline</Badge>,
  args: {
    variant: "outline",
  },
};
