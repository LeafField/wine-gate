import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "./Footer";
import { notoStyle } from "../../../utils/font";

const meta = {
  title: "organisms/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div className={notoStyle.className}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {};
