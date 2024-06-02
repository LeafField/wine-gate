import { StoryObj, Meta } from "@storybook/react";
import MyPageLoading from "./MyPageLoading";

const meta = {
  title: "molecules/MyPageLoading",
  component: MyPageLoading,
} satisfies Meta<typeof MyPageLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
