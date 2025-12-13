import { Meta, StoryObj } from "@storybook/nextjs";
import CloseButton from "./CloseButton";

const meta = {
  title: "atoms/CloseButton",
  component: CloseButton,
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
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoRightBorder: Story = {
  args: {
    rightBorder: false,
  },
};
