import { Meta, StoryObj } from "@storybook/react";
import SearchForm from "./SearchForm";
import { selectDummyData } from "../../../utils/dummyData";

const meta = {
  title: "molecules/SearchForm",
  component: SearchForm,
  args: {
    selectData: selectDummyData,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        pathname: "/",
        asPath: "/",
        query: {},
      },
    },
  },
} satisfies Meta<typeof SearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
