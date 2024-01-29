import { Meta, StoryObj } from "@storybook/react";
import UserPanel from "./UserPanel";

const meta = {
  title: "molecules/UserPanel",
  component: UserPanel,
} satisfies Meta<typeof UserPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dfault: Story = {};
