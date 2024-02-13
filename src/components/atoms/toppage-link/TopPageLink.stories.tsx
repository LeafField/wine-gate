import { StoryObj, Meta } from "@storybook/react";
import TopPageLink from "./TopPageLink";

const meta = {
  title: "atoms/TopPageLink",
  component: TopPageLink,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof TopPageLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
