import { Meta, StoryObj } from "@storybook/react";
import UserPanel from "./UserPanel";
import UseStoreTester from "../../test-components/UseStoreTester";
import { spyOn, within } from "@storybook/test";
import { supabase } from "../../../utils/supabase";

const meta = {
  title: "molecules/UserPanel",
  component: UserPanel,
} satisfies Meta<typeof UserPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Logout: Story = {
  decorators: [
    (Story) => (
      <>
        <UseStoreTester login={false} />
        <Story />
      </>
    ),
  ],
};

export const Login: Story = {
  decorators: [
    (Story) => (
      <>
        <UseStoreTester login={true} />
        <Story />
      </>
    ),
  ],
  play: async ({ canvasElement }) => {
    within(canvasElement);
    spyOn(supabase.auth, "signOut").mockImplementationOnce(() => {
      console.log("signOut");
      return Promise.resolve({ error: null, data: null });
    });
  },
};
