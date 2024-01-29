import { StoryObj, Meta } from "@storybook/react";
import LogoutButton from "./LogoutButton";
import { spyOn, within } from "@storybook/test";
import { supabase } from "../../../utils/supabase";

const meta = {
  title: "atoms/LogoutButton",
  component: LogoutButton,
} satisfies Meta<typeof LogoutButton>;

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
