import { StoryObj, Meta } from "@storybook/react";
import SelectHero from "./SelectHero";

const meta = {
  title: "molecules/SelectHero",
  component: SelectHero,
} satisfies Meta<typeof SelectHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ワインの簡単な選び方",
  },
};
