import { Meta, StoryObj } from "@storybook/react";
import { spyOn, within } from "@storybook/test";
import EditingPage from "./EditingPage";
import * as fetcher from "../../../utils/fetcher";

const meta = {
  title: "template/EditingPage",
  component: EditingPage,
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        pathname: "/profile/[id]",
        asPath: "/profile/1",
        query: {
          id: "1",
        },
      },
    },
  },
} satisfies Meta<typeof EditingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const mockFetcher = { ...fetcher };
    spyOn(mockFetcher, "postWine").mockResolvedValue("1");
    within(canvasElement);
  },
};
