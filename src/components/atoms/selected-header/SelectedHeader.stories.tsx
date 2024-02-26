import { StoryObj, Meta } from "@storybook/react";
import SelectedHeader from "./SelectedHeader";

const meta = {
  title: "atoms/SelectedHeader",
  component: SelectedHeader,
} satisfies Meta<typeof SelectedHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    title: "赤ワイン",
  },
};

export const White: Story = {
  args: {
    title: "白ワイン",
  },
};
