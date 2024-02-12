import { StoryObj, Meta } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "atoms/Accordion",
  component: Accordion,
  decorators: [
    (Story) => (
      <div className="max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "こんにちは。私は元気です。\n改行テストです",
  },
};
