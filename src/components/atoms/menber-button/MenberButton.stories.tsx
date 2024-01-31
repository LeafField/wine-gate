import { Meta, StoryObj } from "@storybook/react";
import MenberButton from "./MenberButton";

const meta = {
  title: "atoms/MenberButton",
  component: MenberButton,
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
} satisfies Meta<typeof MenberButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
