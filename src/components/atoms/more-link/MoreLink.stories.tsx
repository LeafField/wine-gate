import { StoryObj, Meta } from "@storybook/nextjs-vite";
import MoreLink from "./MoreLink";

const meta = {
  title: "atoms/MoreLink",
  component: MoreLink,
} satisfies Meta<typeof MoreLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: "sober",
  },
};
