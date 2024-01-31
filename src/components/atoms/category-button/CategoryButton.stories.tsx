import { Meta, StoryObj } from "@storybook/react";
import CategoryButton from "./CategoryButton";

const meta = {
  title: "atoms/CategoryButton",
  component: CategoryButton,
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
} satisfies Meta<typeof CategoryButton>;

export default meta;

type Story = StoryObj<typeof CategoryButton>;

export const Default: Story = {};
