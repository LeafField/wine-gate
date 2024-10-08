import { Meta, StoryObj } from "@storybook/react";
import { Symbol } from "./Symbol";

const meta = {
  title: "atoms/Symbol",
  component: Symbol,
  decorators: [
    (Story) => (
      <div style={{ height: "124px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Symbol>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
