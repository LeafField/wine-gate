import { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";

const meta = {
  title: "organisms/Navigation",
  component: Navigation,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
