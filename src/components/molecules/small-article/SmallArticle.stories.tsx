import { Meta, StoryObj } from "@storybook/react";
import SmallArticle from "./SmallArticle";
import dummyImage from "../../../images/dummy_wine.png";

const meta = {
  title: "molecules/SmallArticle",
  component: SmallArticle,
} satisfies Meta<typeof SmallArticle>;

export default meta;

type Story = StoryObj<typeof SmallArticle>;

export const Primary: Story = {
  args: {
    chara: "渋い",
    title: "コノスル カベルネ・ソーヴィニヨン ビシクレタ・レゼルバ",
    image_src: dummyImage.src,
    slug: "/",
  },
};

export const Secondary: Story = {
  args: {
    chara: "酸っぱい",
    couplingTags: "樽熟成,上級者向き",
    title: "コノスル カベルネ・ソーヴィニヨン ビシクレタ・レゼルバ",
    image_src: dummyImage.src,
    slug: "/",
  },
};
