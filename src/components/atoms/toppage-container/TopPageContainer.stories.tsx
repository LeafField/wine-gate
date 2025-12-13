import { Meta, StoryObj } from "@storybook/nextjs-vite";
import TopPageContainer from "./TopPageContainer";

const ContainerInner = () => {
  return (
    <TopPageContainer>
      <div className="h-96 bg-black" />
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
  globals: {
    viewport: {
      value: "ipad",
      isRotated: false
    }
  },
};
export const Mobile: Story = {
  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  },
};
