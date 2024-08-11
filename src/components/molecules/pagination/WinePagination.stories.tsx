import { StoryObj, Meta } from "@storybook/react";
import WinePagination from "./WinePagination";

const meta = {
  title: "molecules/WinePagination",
  component: WinePagination,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof WinePagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activePage: 1,
    setPage: () => {},
    totalPages: 10,
  },
};
