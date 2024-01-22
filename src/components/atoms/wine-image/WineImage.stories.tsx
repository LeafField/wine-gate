import { Meta, StoryObj } from "@storybook/react";
import WineImage from "./WineImage";
import dummyImage from "../../../images/dummy_wine.png";

const meta = {
  title: "atoms/WineImage",
  component: WineImage,
} satisfies Meta<typeof WineImage>;

export default meta;

type Story = StoryObj<typeof WineImage>;

export const Default: Story = {
  args: {
    src: dummyImage.src,
  },
};
