import { StoryObj, Meta } from "@storybook/react";
import WineTitle from "./WineTitle";

const meta = {
  title: "atoms/WineTitle",
  component: WineTitle,
  decorators: [
    (Story: any) => (
      <div className="ml-4 mt-4 max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WineTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ワインのタイトル",
    id: "fasdf",
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "ワインのタイトルが長い場合のテストです。ワインのタイトルが長い場合のテストです。ワインのタイトルが長い場合のテストです。",
    id: "fasdf",
  },
};

export const Mobile: Story = {
  args: {
    title:
      "ワインのタイトルが長い場合のテストです。ワインのタイトルが長い場合のテストです。ワインのタイトルが長い場合のテストです。",
    id: "fasdf",
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};

export const Several: Story = {
  args: {
    title: "ワインのタイトル",
    id: "fasdf",
  },
  decorators: [
    (Story: any) => (
      <div className="space-y-4">
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
};
