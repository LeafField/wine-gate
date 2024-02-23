import { StoryObj, Meta } from "@storybook/react";
import WideArticle from "./WideArticle";
import { articleDummyData } from "../../../utils/dummyData";
import dummyImage from "../../../images/dummy_wine2.jpg";

const meta = {
  title: "organisms/WideArticle",
  component: WideArticle,
} satisfies Meta<typeof WideArticle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Laptop: Story = {
  args: {
    article: articleDummyData,
    // image_src:
    //   "https://bcssrfyaqnyvqtmabmnt.supabase.co/storage/v1/object/public/wines/d73c4932-020b-4c5c-b784-185cbaf301cb/conosur.jpg",
  },
  decorators: [
    (Story) => (
      <div className="ml-4 mt-4 max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
};

export const AddFavoriteCount: Story = {
  args: {
    article: {
      ...articleDummyData,
      favorite: {
        count: 10,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="ml-4 mt-4 max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
};

export const Double: Story = {
  decorators: [
    (Story) => (
      <div className="ml-4 mt-4 max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
  args: {
    article: {
      author_name: "田中太郎",
      categories: {
        category: "sober",
        chara: "渋い",
        sub: "red",
        id: 1,
      },
      fruity: 3,
      id: "1",
      price: 1000,
      sober_or_sweet: 3,
      tart: 3,
      tags: "樽熟成",
      title:
        "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ あああああああああああああああああああ",
      image_src: dummyImage.src,
    },
  },
};

export const Mobile: Story = {
  args: {
    article: articleDummyData,
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
