import { Meta, StoryObj } from "@storybook/react";
import ArticlePage from "./ArticlePage";
import { wineDummyData } from "../../../utils/dummyData";
import { WineProps } from "../../../types/article_types";
import { useQueryClient } from "@tanstack/react-query";

const DummyDataWrapper = (props: WineProps) => {
  const queryClient = useQueryClient();
  queryClient.setQueryData(["favoriteCount", props.id], 48);
  queryClient.setQueryData(["favoriteUser", props.id], { user_id: "2468" });
  return (
    <ArticlePage
      author_id={props.author_id}
      categories={props.categories}
      description={props.description}
      erudition={props.erudition}
      fruity={props.fruity}
      id={props.id}
      image_src={props.image_src}
      place={props.place}
      price={props.price}
      sober_or_sweet={props.sober_or_sweet}
      tags={props.tags}
      tart={props.tart}
      title={props.title}
      author_name={props.author_name}
      category_id={props.category_id}
      created_at={props.created_at}
    />
  );
};

const meta = {
  title: "template/ArticlePage",
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
  args: wineDummyData,
};
