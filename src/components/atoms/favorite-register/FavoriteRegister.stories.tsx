import { StoryObj, Meta } from "@storybook/react";
import FavoriteRegister from "./FavoriteRegister";

const meta = {
  title: "atoms/FavoriteRegister",
  component: FavoriteRegister,
  args: {
    addFavoriteCallback: () => {},
    removeFavoriteCallback: () => {},
  },
} satisfies Meta<typeof FavoriteRegister>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnFavorite: Story = {
  args: {
    favorite: false,
    loading: false,
  },
};

export const Favorite: Story = {
  args: {
    favorite: true,
    loading: false,
  },
};
