import { Meta, StoryObj } from "@storybook/nextjs-vite";
import NewArrivals from "./NewArrivals";
import { smallArticleDummyData } from "../../../utils/dummyData";

const meta = {
  title: "organisms/new-arrivals",
  component: NewArrivals,
  args: {
    articles: [...smallArticleDummyData],
  },
} as Meta<typeof NewArrivals>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PC: Story = {};
export const Mobile: Story = {
  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  },
};
