import { Meta, StoryObj } from "@storybook/react";
import HeaderTitle from "./Header";
import { notoStyle } from "../../../utils/font";

const meta = {
  title: "organisms/header",
  component: HeaderTitle,
  decorators: [
    (StoryComponents) => (
      <div className={notoStyle.className}>
        <StoryComponents />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PC: Story = {};
export const mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
