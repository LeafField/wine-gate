import { Meta, StoryObj } from "@storybook/react";
import SearchButton from "./SearchButton";

const meta = {
  title: "atoms/SearchButton",
  component: SearchButton,
} satisfies Meta<typeof SearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
