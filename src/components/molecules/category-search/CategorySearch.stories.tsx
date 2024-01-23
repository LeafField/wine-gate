import { Meta, StoryObj } from "@storybook/react";
import CategorySearch from "./CategorySearch";
import { categoryDummyData } from "../../../utils/dummyData";

const meta = {
  title: "CategorySearch",
  component: CategorySearch,
  args: {
    categories: categoryDummyData,
  },
} satisfies Meta<typeof CategorySearch>;

export default meta;

type Story = StoryObj<typeof CategorySearch>;

export const Default: Story = {};
