import { StoryObj, Meta } from "@storybook/react";
import ArticleInfo from "./ArticleInfo";

const meta = {
  title: "molecules/ArticleInfo",
  component: ArticleInfo,
} satisfies Meta<typeof ArticleInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    red: false,
    fruity: 3,
    sober_or_sweet: 3,
    tart: 3,
  },
};

export const Red: Story = {
  args: {
    red: true,
    fruity: 3,
    sober_or_sweet: 3,
    tart: 3,
  },
};

export const AddCount: Story = {
  args: {
    red: false,
    fruity: 3,
    sober_or_sweet: 3,
    tart: 3,
    favorite_count: 5,
  },
};
