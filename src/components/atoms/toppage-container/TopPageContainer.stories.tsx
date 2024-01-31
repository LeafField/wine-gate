import { Meta, StoryObj } from "@storybook/react";
import TopPageContainer from "./TopPageContainer";

const ContainerInner = () => {
  return (
    <TopPageContainer>
      <div className="h-96 bg-black " />
    </TopPageContainer>
  );
};

const meta = {
  title: "atoms/TopPageContainer",
  component: ContainerInner,
} satisfies Meta<typeof ContainerInner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PC: Story = {};
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
