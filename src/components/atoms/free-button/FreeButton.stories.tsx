import { Meta, StoryObj } from "@storybook/react";
import FreeButton from "./FreeButton";

const meta = {
  title: "atoms/FreeButton",
  component: FreeButton,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[107px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FreeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
