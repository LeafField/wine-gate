import { StoryObj, Meta } from "@storybook/react";
import TasteBalance from "./TasteBalance";

const meta = {
  title: "atoms/TasteBalance",
  component: TasteBalance,
} satisfies Meta<typeof TasteBalance>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sober: Story = {
  args: {
    title: "渋味",
    balance: 3,
  },
};
