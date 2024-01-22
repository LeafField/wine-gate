import { Meta, StoryObj } from "@storybook/react";
import Pill from "./Pill";
import { notoStyle } from "../../../utils/font";

const meta = {
  title: "atoms/Pill",
  component: Pill,
  decorators: [
    (Story) => (
      <div className={notoStyle.className}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof Pill>;

export const Primary: Story = {
  args: {
    title: "渋い",
  },
};

export const Secondary: Story = {
  args: {
    title: "酸っぱい",
  },
};
