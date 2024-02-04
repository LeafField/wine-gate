import { Meta, StoryObj } from "@storybook/react";
import PriceInput from "./PriceInput";

const meta = {
  title: "atoms/PriceInput",
  component: PriceInput,
} satisfies Meta<typeof PriceInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
