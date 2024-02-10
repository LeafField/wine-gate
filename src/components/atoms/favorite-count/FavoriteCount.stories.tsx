import { StoryObj, Meta } from "@storybook/react";
import FavoriteCount from "./FavoriteCount";

const meta = {
  title: "atoms/FavoriteCount",
  component: FavoriteCount,
  args: {
    count: 48,
  },
} satisfies Meta<typeof FavoriteCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
