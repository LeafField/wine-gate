import { StoryObj, Meta } from "@storybook/react";
import ArticleConsole from "./ArticleConsole";
import { useQueryClient } from "@tanstack/react-query";
import UseStoreTester from "../../test-components/UseStoreTester";

const DummyDataWrapper = ({
  wine_id,
  author_id,
  favorite,
}: {
  wine_id: string;
  author_id: string;
  favorite?: boolean;
}) => {
  const queryClient = useQueryClient();
  const userid = favorite ? "fadskjh" : "2468";
  queryClient.setQueryData(["favoriteCount", wine_id], 48);
  queryClient.setQueryData(["favoriteUser", wine_id], { user_id: userid });
  return <ArticleConsole wine_id={wine_id} author_id={author_id} />;
};

const meta = {
  title: "molecules/ArticleConsole",
  component: DummyDataWrapper,
} satisfies Meta<typeof DummyDataWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    wine_id: "1234",
    author_id: "5678",
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
  args: {
    wine_id: "1234",
    author_id: "5678",
  },
};

export const Author: Story = {
  args: {
    wine_id: "1234",
    author_id: "fadskjh",
  },
  decorators: [
    (Story) => (
      <>
        <UseStoreTester login={true} />
        <Story />
      </>
    ),
  ],
};

export const IsFavorite: Story = {
  args: {
    wine_id: "1234",
    author_id: "5678",
    favorite: true,
  },
  decorators: [
    (Story) => (
      <>
        <UseStoreTester login={true} />
        <Story />
      </>
    ),
  ],
};
