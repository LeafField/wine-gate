import { StoryObj, Meta } from "@storybook/react";
import MainSectionLoading from "./MainSectionLoading";
import Container from "../container/Container";
import Navigation from "../../organisms/navigation/Navigation";
import ViewPortListener from "../../organisms/listener/ViewPortListener";

const meta = {
  title: "atoms/Loading",
  component: MainSectionLoading,
} satisfies Meta<typeof MainSectionLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const WithNavigation: Story = {
  decorators: [
    (Story) => (
      <Container>
        <Story />
        <Navigation />
        <ViewPortListener />
      </Container>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
