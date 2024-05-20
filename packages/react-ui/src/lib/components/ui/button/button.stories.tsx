import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Plus } from "lucide-react"; // Importing a Lucide React icon

const meta: Meta<typeof Button> = {
  title: "UI/Components/Button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A versatile button component with multiple variants and sizes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Default story for the Button component.
 */
export const Default: Story = {
  render: (args) => <Button {...args}>Default</Button>,
  args: {
    variant: "default",
    size: "default",
  },
};

/**
 * Destructive variant of the Button component.
 */
export const Destructive: Story = {
  render: (args) => <Button {...args}>Destructive</Button>,
  args: {
    variant: "destructive",
  },
};

/**
 * Outline variant of the Button component.
 */
export const Outline: Story = {
  render: (args) => <Button {...args}>Outline</Button>,
  args: {
    variant: "outline",
  },
};

/**
 * Secondary variant of the Button component.
 */
export const Secondary: Story = {
  render: (args) => <Button {...args}>Secondary</Button>,
  args: {
    variant: "secondary",
  },
};

/**
 * Ghost variant of the Button component.
 */
export const Ghost: Story = {
  render: (args) => <Button {...args}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
};

/**
 * Link variant of the Button component.
 */
export const Link: Story = {
  render: (args) => <Button {...args}>Link</Button>,
  args: {
    variant: "link",
  },
};

/**
 * Small size of the Button component.
 */
export const Small: Story = {
  render: (args) => <Button {...args}>Small</Button>,
  args: {
    size: "sm",
  },
};

/**
 * Large size of the Button component.
 */
export const Large: Story = {
  render: (args) => <Button {...args}>Large</Button>,
  args: {
    size: "lg",
  },
};

/**
 * Icon size of the Button component.
 */
export const Icon: Story = {
  render: (args) => (
    <Button {...args}>
      <Plus />
    </Button>
  ),
  args: {
    size: "icon",
  },
};
