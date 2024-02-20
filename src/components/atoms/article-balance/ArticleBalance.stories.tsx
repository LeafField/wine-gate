import { StoryObj, Meta } from "@storybook/react";
import ArticleBalance from "./ArticleBalance";

const meta = {
  title: "atoms/ArticleBalance",
  component: ArticleBalance,
} satisfies Meta<typeof ArticleBalance>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "甘味",
    balance: 3,
  },
};

export const Sober: Story = {
  args: {
    title: "渋味",
    balance: 5,
  },
};
