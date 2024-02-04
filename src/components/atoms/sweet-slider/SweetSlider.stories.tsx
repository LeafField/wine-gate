import { StoryObj, Meta } from "@storybook/react";
import SweetSlider from "./SweetSlider";

const meta = {
  title: "atoms/SweetSlider",
  component: SweetSlider,
  decorators: [
    (Story) => (
      <div className="mt-8 w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SweetSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
