import { StoryObj, Meta } from "@storybook/react";
import ArticlePanel from "./ArticlePanel";
import { categoryDummyData } from "../../../utils/dummyData";
import { useQueryClient } from "@tanstack/react-query";
import { CategoryProps } from "../../../types/article_types";

const DummyDataWrapper = ({
  author_id,
  category,
  tags,
  wine_id,
}: {
  author_id: string;
  category: CategoryProps;
  tags: string;
  wine_id: string;
}) => {
  const queryClient = useQueryClient();
  queryClient.setQueryData(["favoriteCount", wine_id], 48);
  queryClient.setQueryData(["favoriteUser", wine_id], { user_id: "2468" });
  return (
    <ArticlePanel
      author_id={author_id}
      category={category}
      tags={tags}
      wine_id={wine_id}
    />
  );
};

const meta = {
  title: "organisms/ArticlePanel",
  component: DummyDataWrapper,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof DummyDataWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author_id: "1",
    category: categoryDummyData[0],
    tags: "タグ",
    wine_id: "1",
  },
};
