import { Meta, StoryObj } from "@storybook/react";
import UserPanelButton from "./UserPanelButton";

const meta = {
  title: "atoms/UserPanelButton",
  component: UserPanelButton,
  args: {
    href: "/",
  },
} satisfies Meta<typeof UserPanelButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Posting: Story = {
  args: {
    title: "ワイン記事を投稿する",
  },
};

export const Look: Story = {
  args: {
    title: "投稿記事一覧",
  },
};

export const Favorite: Story = {
  args: {
    title: "お気に入りのワイン",
  },
};

export const Logout: Story = {
  args: {
    title: "ログアウト",
  },
};
