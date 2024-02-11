import { StoryObj, Meta } from "@storybook/react";
import EditingLink from "./EditingLink";

const meta = {
  title: "atoms/EditingLink",
  component: EditingLink,
} satisfies Meta<typeof EditingLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    wine_id: "1234",
  },
};
