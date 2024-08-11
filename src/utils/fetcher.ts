import { supabase } from "./supabase";
import { EditingPageSchemaType, ImageInputSchemaType } from "./schema";
import { User } from "../store";
import { revalidateServer } from "../server/revalidate";
import { cache } from "react";
import { ArticleProps } from "../types/article_types";

export const postWine = async ({
  value,
  user,
  image,
}: {
  value: EditingPageSchemaType;
  user: User;
  image: ImageInputSchemaType;
}) => {
  if (!image) throw new Error("画像が必須です");
  const IMAGE_SRC = `${user.id}/${image.name}`;

  const { error: imageError, data: imageData } = await supabase.storage
    .from("wines")
    .upload(IMAGE_SRC, image);

  if (imageError) throw new Error("画像のアップロードに失敗しました");
  if (imageData) {
    const { data, error } = await supabase
      .from("wines")
      .insert({
        title: value.title.replace(/　/g, " "),
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
        image_src: imageData.path,
      })
      .select();
    if (error) throw new Error("投稿に失敗しました");
    return data[0].id;
  }
};

export const getNewWines = cache(async () => {
  const { data, error } = await supabase
    .from("wines")
    .select(
      "title,sober_or_sweet,tart,fruity,author_name,tags,id,price,image_src,categories(chara)",
    )
    .order("created_at", { ascending: false })
    .limit(3);
  if (error) throw new Error("ワインの取得に失敗しました");
  return data;
});

export const updateWine = async ({
  id,
  image,
  oldWineImage,
  user_id,
  value,
}: {
  id: string;
  user_id: string;
  value: EditingPageSchemaType;
  image: ImageInputSchemaType | null;
  oldWineImage: string;
}) => {
  revalidateServer(id);
  if (image) {
    const IMAGE_SRC = `${user_id}/${image.name}`;
    const { error } = await supabase.storage
      .from("wines")
      .upload(IMAGE_SRC, image);
    if (error) throw new Error("画像のアップロードに失敗しました");
    const { error: deleteError } = await supabase.storage
      .from("wines")
      .remove([oldWineImage]);
    if (deleteError) throw new Error("画像の削除に失敗しました");
  }
  const { data, error } = await supabase
    .from("wines")
    .update({
      title: value.title.replace(/　/g, " "),
      price: value.price,
      place: value.place,
      description: value.description,
      erudition: value.erudition,
      category_id: Number(value.category_id),
      fruity: value.fruity,
      tart: value.tart,
      sober_or_sweet: value.sober_or_sweet,
      tags: value.tags.join(),
      image_src: image ? `${user_id}/${image.name}` : oldWineImage,
    })
    .eq("id", id)
    .select();
  if (error) throw new Error("ワインの更新に失敗しました");
  const slug: { id: string } = await fetch(`/api/revalidate?id=${data[0].id}`, {
    method: "GET",
  }).then((res) => res.json());
  return slug.id;
};

export const favoriteCount = async (wine_id: string) => {
  const { count, error } = await supabase
    .from("favorite")
    .select("id", { count: "exact", head: true })
    .eq("wine_id", wine_id);
  if (error) throw new Error("お気に入りのカウントに失敗しました");
  return count;
};

export const favoriteUserOne = async (wine_id: string, userId: string) => {
  const { data, error } = await supabase.rpc("favorite_user_one", {
    wine: wine_id,
    arg_user_id: userId,
  });
  if (error) throw new Error("お気に入りのユーザー取得に失敗しました");
  return data ? { user_id: data } : null;
};

export const addFavorite = async ({
  wine_id,
  user_id,
}: {
  wine_id: string;
  user_id: string;
}) => {
  const { error } = await supabase
    .from("favorite")
    .insert({ wine_id, user_id });

  if (error) throw new Error("お気に入りの登録に失敗しました");
};

export const removeFavorite = async ({
  wine_id,
  user_id,
}: {
  wine_id: string;
  user_id: string;
}) => {
  const { error } = await supabase
    .from("favorite")
    .delete()
    .eq("wine_id", wine_id)
    .eq("user_id", user_id);

  if (error) throw new Error("お気に入りの解除に失敗しました");
};

export const getWine = async (id: string) => {
  const { data, error } = await supabase
    .from("wines")
    .select("*,categories(*)")
    .eq("id", id)
    .single();
  if (error) throw new Error("ワインの取得に失敗しました");

  return data;
};

export const getMyPostWine = async (user_id: string) => {
  const { data, error } = await supabase
    .from("wines")
    .select("id,title")
    .eq("author_id", user_id);
  if (error) throw new Error("お気に入りのワインの取得に失敗しました");
  return data;
};

export const getFavoriteWine = async (user_id: string) => {
  const { data, error } = await supabase.rpc("get_wine_my_favorite", {
    client_id: user_id,
  });
  if (error) throw new Error("お気に入りのワインの取得に失敗しました");

  return data;
};

export const getSearchWine = async (searchText: string) => {
  const { data, error } = await supabase
    .rpc("get_search_wines", { search_text: searchText })
    .limit(10);
  if (error) throw new Error("検索結果の取得に失敗しました");
  const articles: ArticleProps[] = data.map((article) => ({
    categories: {
      category: article.category_name,
      id: article.category_id,
      chara: article.category_chara,
      sub: article.category_sub,
    },
    author_name: article.author_name,
    fruity: article.fruity,
    id: article.id,
    image_src: article.image_src,
    price: article.price,
    sober_or_sweet: article.sober_or_sweet,
    tags: article.tags,
    tart: article.tart,
    title: article.title,
  }));
  return articles;
};

export const getWineCategorySlug = async () => {
  const { data, error } = await supabase.from("categories").select("category");
  if (error) throw new Error("カテゴリースラグの取得に失敗しました。");
  return data;
};
