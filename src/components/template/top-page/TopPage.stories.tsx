import { Meta, StoryObj } from "@storybook/nextjs-vite";
import TopPage from "./TopPage";
import { smallArticleDummyData } from "../../../utils/dummyData";

const meta = {
  title: "template/TopPage",
  component: TopPage,
} satisfies Meta<typeof TopPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: smallArticleDummyData,
  },
};
