import { StoryObj, Meta } from "@storybook/react";
import LoginButton from "./LoginButton";

const meta = {
  title: "atoms/LoginButton",
  component: LoginButton,
  decorators: [
    (Story: any) => (
      <div className="nav-panel">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof LoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
