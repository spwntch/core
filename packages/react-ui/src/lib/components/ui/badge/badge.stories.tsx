import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"

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
}

export default meta

export const Default: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Default</Badge>,
  args: {
    variant: "default",
  },
}

export const Secondary: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Secondary</Badge>,
  args: {
    variant: "secondary",
  },
}

export const Destructive: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Destructive</Badge>,
  args: {
    variant: "destructive",
  },
}

export const Outline: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Outline</Badge>,
  args: {
    variant: "outline",
  },
}
