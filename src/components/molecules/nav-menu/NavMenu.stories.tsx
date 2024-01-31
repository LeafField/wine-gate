import { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./NavMenu";

const meta = {
  title: "molecules/NavMenu",
  component: NavMenu,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  parameters: { viewport: { defaultViewport: "iphone5" } },
};

export const IPhone14Pro: Story = {
  parameters: { viewport: { defaultViewport: "iphone14promax" } },
};
