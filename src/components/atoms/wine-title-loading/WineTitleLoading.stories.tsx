import { StoryObj, Meta } from "@storybook/react";
import WineTitleLoading from "./WineTitleLoading";

const meta = {
  title: "atoms/WineTitleLoading",
  component: WineTitleLoading,
} satisfies Meta<typeof WineTitleLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
      </div>
    ),
  ],
};
