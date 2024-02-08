import { supabase } from "./supabase";
import { WinePostType } from "../types/article_types";
import { EditingPageSchemaType } from "./schema";
import { User } from "../store";

export const fetcher = async () => {
  const { data, error } = await supabase.from("categories").select();
  if (error) throw error;
  return data;
};

export const postWine = async ({
  value,
  user,
}: {
  value: EditingPageSchemaType;
  user: User;
}) => {
  const { data, error } = await supabase
    .from("wines")
    .insert({
      title: value.title,
      price: value.price,
      place: value.place,
      description: value.description,
      erudition: value.erudition,
      category_id: Number(value.category_id),
      fruity: value.fruity,
      tart: value.tart,
      sober_or_sweet: value.sober_or_sweet,
      tags: value.tags.join(),
      author_id: user.id,
      author_name: user.username,
      image_src: `${user.id}/${value.image?.name}`,
    })
    .select();
  if (error) throw new Error("投稿に失敗しました");
  return data[0].id;
};
