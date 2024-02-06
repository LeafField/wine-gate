import { Meta, StoryObj } from "@storybook/react";
import EditingPage from "./EditingPage";

const meta = {
  title: "template/EditingPage",
  component: EditingPage,
} satisfies Meta<typeof EditingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
