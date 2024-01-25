import { Meta, StoryObj } from "@storybook/react";
import CategoryPanel from "./CategoryPanel";
import { categoryDummyData } from "../../../utils/dummyData";

const meta = {
  title: "molecules/CategoryPanel",
  component: CategoryPanel,
  args: {
    categories: categoryDummyData,
  },
} satisfies Meta<typeof CategoryPanel>;

export default meta;

type Story = StoryObj<typeof CategoryPanel>;

export const Default: Story = {};
