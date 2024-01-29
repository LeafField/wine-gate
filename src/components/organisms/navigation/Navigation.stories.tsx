import { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";
import { spyOn, within } from "@storybook/test";
import { supabase } from "../../../utils/supabase";

const meta = {
  title: "organisms/Navigation",
  component: Navigation,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    within(canvasElement);
    spyOn(supabase.auth, "signOut").mockImplementationOnce(() => {
      console.log("signOut");
      return Promise.resolve({ error: null, data: null });
    });
  },
};
