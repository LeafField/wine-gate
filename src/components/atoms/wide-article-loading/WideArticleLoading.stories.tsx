import { Meta, StoryObj } from "@storybook/react";
import WideArticleLoading from "./WideArticleLoading";

const meta = {
  title: "atoms/WideArticleLoading",
  component: WideArticleLoading,
} satisfies Meta<typeof WideArticleLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div className="ml-4 mt-4 max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
};
