import { Meta, StoryObj } from "@storybook/react";
import SmallArticle from "./SmallArticle";
import dummyImage from "../../../images/dummy_wine.png";

const meta = {
  title: "molecules/SmallArticle",
  component: SmallArticle,
  decorators: [
    (Story) => (
      <div className="grid w-[20.75rem] grid-cols-1">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SmallArticle>;

export default meta;

type Story = StoryObj<typeof SmallArticle>;

export const Primary: Story = {
  args: {
    categories: {
      chara: "渋い",
    },
    title: "コノスル カベルネ・ソーヴィニヨン ビシクレタ・レゼルバ",
    image_src: dummyImage.src,
    id: "/",
  },
};

export const Secondary: Story = {
  args: {
    categories: {
      chara: "果実味豊か",
    },
    tags: "樽熟成,上級者向き",
    title: "コノスル カベルネ・ソーヴィニヨン ビシクレタ・レゼルバ",
    image_src: dummyImage.src,
    id: "/",
  },
};
