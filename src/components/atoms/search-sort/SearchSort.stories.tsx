import { Meta, StoryObj } from "@storybook/react";
import SearchSort from "./SearchSort";

const meta = {
  title: "atoms/SearchSort",
  component: SearchSort,
  decorators: [
    (Story: any) => (
      <div className="panel-inner">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchSort>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
