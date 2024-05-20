import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

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
}

export default meta

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Default</Button>,
  args: {
    variant: "default",
    size: "default",
  },
}

export const Destructive: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Destructive</Button>,
  args: {
    variant: "destructive",
  },
}

export const Outline: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Outline</Button>,
  args: {
    variant: "outline",
  },
}

export const Secondary: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Secondary</Button>,
  args: {
    variant: "secondary",
  },
}

export const Ghost: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
}

export const Link: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Link</Button>,
  args: {
    variant: "link",
  },
}

export const Small: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Small</Button>,
  args: {
    size: "sm",
  },
}

export const Large: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Large</Button>,
  args: {
    size: "lg",
  },
}

export const Icon: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Icon</Button>,
  args: {
    size: "icon",
  },
}
