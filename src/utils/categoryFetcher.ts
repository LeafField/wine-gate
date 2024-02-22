import { supabase } from "./supabase";
import { cache } from "react";

export const categoryFetcher = cache(async (slug: string[]) => {
  if (slug.length !== 3) return null;
  const category = slug[0];
  const sort = slug[1];
  const page = Number(slug[2]);
  const start = (page - 1) * 10;
  const end = page * 10 - 1;
  if (sort === "new") {
    const { data, error } = await supabase
      .from("wines")
      .select(
        "title,sober_or_sweet,tart,fruity,author_name,tags,id,price,image_src,categories(*)",
      )
      .eq("categories.category", category)
      .order("created_at", { ascending: false })
      .range(start, end);
    if (error) throw new Error("カテゴリの取得に失敗しました");
    return data;
  } else if (sort === "inexpensive") {
    const { data, error } = await supabase
      .from("wines")
      .select(
        "title,sober_or_sweet,tart,fruity,author_name,tags,id,price,image_src,categories(*)",
      )
      .eq("categories.category", category)
      .order("price", { ascending: true })
      .range(start, end);
    if (error) throw new Error("カテゴリの取得に失敗しました");
    return data;
  }
  return null;
});
