import { StoryObj, Meta } from "@storybook/react";
import LineUpHero from "./LineUpHero";

const meta = {
  title: "molecules/LineUpHero",
  component: LineUpHero,
} satisfies Meta<typeof LineUpHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scroll: Story = {
  decorators: [
    (Story) => (
      <div className="h-[200vh]">
        <Story />
        <div className="h-[100vh] bg-white"></div>
      </div>
    ),
  ],
};

export const Mobile: Story = {
  decorators: [
    (Story) => (
      <div className="h-[200vh]">
        <Story />
        <div className="h-[100vh] bg-white"></div>
      </div>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
