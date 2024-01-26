import { StoryObj, Meta } from "@storybook/react";
import SearchCategory from "./SearchCategory";
import { categoryDummyData } from "../../../utils/dummyData";
import { selectDummyData } from "../../../utils/dummyData";

const meta = {
  title: "atoms/SearchCategory",
  component: SearchCategory,
  args: {
    selectData: selectDummyData,
  },
  decorators: [
    (Story) => (
      <div className="panel-inner">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchCategory>;

export default meta;

type Story = StoryObj<typeof SearchCategory>;

export const Default: Story = {};
