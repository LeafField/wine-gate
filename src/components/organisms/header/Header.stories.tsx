import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { notoStyle } from "../../../utils/font";

const meta = {
  title: "organisms/header",
  component: Header,
  decorators: [
    (StoryComponents) => (
      <div className={notoStyle.className}>
        <StoryComponents />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PC: Story = {};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
