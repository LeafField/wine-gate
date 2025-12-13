import { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavMenu from "./NavMenu";

const meta = {
  title: "molecules/NavMenu",
  component: NavMenu,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  globals: {
    viewport: {
      value: "iphone5",
      isRotated: false
    }
  },
};

export const IPhone14Pro: Story = {
  globals: {
    viewport: {
      value: "iphone14promax",
      isRotated: false
    }
  },
};
