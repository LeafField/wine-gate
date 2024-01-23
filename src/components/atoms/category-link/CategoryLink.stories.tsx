import { Meta, StoryObj } from "@storybook/react";
import CategoryLink from "./CategoryLink";

const meta = {
  title: "atoms/CategoryLink",
  component: CategoryLink,
} as Meta<typeof CategoryLink>;

export default meta;

type Story = StoryObj<typeof CategoryLink>;

export const Primary: Story = {
  args: {
    title: "渋い",
    src: "sober",
  },
};

export const Secondary: Story = {
  args: {
    title: "酸っぱい",
    src: "sour",
  },
};
