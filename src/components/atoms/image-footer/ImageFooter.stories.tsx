import { StoryObj, Meta } from "@storybook/react";
import ImageFooter from "./ImageFooter";

const meta = {
  title: "atoms/ImageFooter",
  component: ImageFooter,
} satisfies Meta<typeof ImageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author_name: "ワイン大好きクラブ会長",
    price: 900,
  },
  decorators: [
    (Story) => (
      <div className="w-[1039px]">
        <Story />
      </div>
    ),
  ],
};

export const Mobile: Story = {
  args: {
    author_name: "ワイン大好きクラブ会長",
    price: 900,
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
