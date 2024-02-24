import { StoryObj, Meta } from "@storybook/react";
import MyPage from "./MyPage";
import { wineTitleDummyData } from "../../../utils/dummyData";
import Container from "../../atoms/container/Container";
import ViewPortListener from "../listener/ViewPortListener";

const meta = {
  title: "organisms/MyPage",
  component: MyPage,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <Container>
        <ViewPortListener />
        <Story />
        <div className="hidden nav tablet:block tablet:w-[333px]"></div>
      </Container>
    ),
  ],
} satisfies Meta<typeof MyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heroTitle: "マイページ",
    pageTitle: "お気に入りワイン",
    articles: wineTitleDummyData,
  },
};
