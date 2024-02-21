import { StoryObj, Meta } from "@storybook/react";
import ArticleImage from "./ArticleImage";
import dummyImage from "../../../images/dummy_wine.png";

const meta = {
  title: "molecules/ArticleImage",
  component: ArticleImage,
} satisfies Meta<typeof ArticleImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author_name: "ワイン大好きクラブ会長",
    price: 900,
    image_src: dummyImage.src,
    title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
  },
  decorators: [
    (Story) => (
      <div className="w-[1039px]">
        <Story />
      </div>
    ),
  ],
};

export const Mobile: Story = {
  args: {
    author_name: "ワイン大好きクラブ会長",
    price: 900,
    image_src: dummyImage.src,
    title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
