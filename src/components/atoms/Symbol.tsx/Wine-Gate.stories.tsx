import { Meta, StoryObj } from "@storybook/react";
import { Symbol } from "./Symbol";

const meta = {
  title: "atoms/Symbol",
  component: Symbol,
} satisfies Meta<typeof Symbol>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
