import { Meta, StoryObj } from "@storybook/react";
import OtherFlavor from "./OtherFlavor";

const meta = {
  title: "atoms/OtherFlavor",
  component: OtherFlavor,
} satisfies Meta<typeof OtherFlavor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
