import { Meta, StoryObj } from "@storybook/react";
import TopPageSection from "./TopPageSection";

const meta = {
  title: "organisms/TopPageSection",
  component: TopPageSection,
} satisfies Meta<typeof TopPageSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
