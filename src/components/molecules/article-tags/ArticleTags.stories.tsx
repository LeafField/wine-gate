import { StoryObj, Meta } from "@storybook/react";
import ArticleTags from "./ArticleTags";

const meta = {
  title: "molecules/ArticleTags",
  component: ArticleTags,
} satisfies Meta<typeof ArticleTags>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tags: "樽熟成,中級者向け",
    category: {
      chara: "渋い",
      id: 1,
      category: "sober",
      sub: "red",
    },
  },
};
