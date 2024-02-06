import { Meta, StoryObj } from "@storybook/react";
import Authentication from "./Authentication";

const meta = {
  title: "template/Authentication",
  component: Authentication,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Authentication>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
