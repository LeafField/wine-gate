import { StoryObj, Meta } from "@storybook/react";
import HeroHeader from "./HeroHeader";

const meta = {
  title: "atoms/HeroHeader",
  component: HeroHeader,
} satisfies Meta<typeof HeroHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="h-75 w-full">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "新着ワイン",
  },
};
