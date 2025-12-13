import { StoryObj, Meta } from "@storybook/nextjs-vite";
import ArticleHeader from "./ArticleHeader";

const meta = {
  title: "atoms/ArticleHeader",
  component: ArticleHeader,
} satisfies Meta<typeof ArticleHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
  },
};

export const Mobile: Story = {
  args: {
    title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
  },
  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  },
};
