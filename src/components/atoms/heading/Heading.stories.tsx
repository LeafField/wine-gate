import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "atoms/heading",
  component: Heading,
  args: {
    title: "新着ワイン",
  },
} as Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
