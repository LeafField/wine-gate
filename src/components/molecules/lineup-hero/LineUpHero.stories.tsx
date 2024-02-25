import { StoryObj, Meta } from "@storybook/react";
import LineUpHero from "./LineUpHero";

const meta = {
  title: "molecules/LineUpHero",
  component: LineUpHero,
} satisfies Meta<typeof LineUpHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ワイン検索",
  },
};

export const Scroll: Story = {
  decorators: [
    (Story) => (
      <div className="h-[200vh]">
        <Story />
        <div className="h-[100vh] bg-white"></div>
      </div>
    ),
  ],
  args: {
    title: "ワイン検索",
  },
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
  args: {
    title: "ワイン検索",
  },
};
