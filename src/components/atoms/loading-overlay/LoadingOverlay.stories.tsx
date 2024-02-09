import { Meta, StoryObj } from "@storybook/react";
import LoadingOverlay from "./LoadingOverlay";

const meta = {
  title: "atoms/LoadingOverlay",
  component: LoadingOverlay,
} satisfies Meta<typeof LoadingOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const UnderText: Story = {
  decorators: [
    (Story) => (
      <div>
        <p>テキストの下に表示されるローディング</p>
        <Story />
      </div>
    ),
  ],
};
