import { StoryObj, Meta } from "@storybook/react";
import FlavorSlider from "./FlavorSlider";

const meta = {
  title: "atoms/FlavorSlider",
  component: FlavorSlider,
  decorators: [
    (Story) => (
      <div className="mt-8 w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FlavorSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "sober_or_sweet",
  },
};
