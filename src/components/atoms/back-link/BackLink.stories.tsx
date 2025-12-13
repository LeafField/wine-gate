import { StoryObj, Meta } from "@storybook/nextjs-vite";
import BackLink from "./BackLink";

const meta = {
  title: "atoms/BackLink",
  component: BackLink,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof BackLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
