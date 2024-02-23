import { supabase } from "./supabase";
import { cache } from "react";
import { ArticleProps } from "../types/article_types";

export const categoryFetcher = cache(
  async (slug: string[]): Promise<ArticleProps[] | null> => {
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
    } else if (sort === "popular") {
      const { data, error } = await supabase
        .rpc("get_wine_category_favorite", {
          category_value: category,
        })
        .limit(10);
      if (error) throw new Error("カテゴリの取得に失敗しました");
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
    }
    return null;
  },
);

export const categoryCountFetcher = cache(async (category: string) => {
  const { count } = await supabase
    .from("wines")
    .select("id,categories(category)", { count: "exact", head: true })
    .eq("categories.category", category);
  if (count) {
    const totalPage = Math.ceil(count / 10);
    return totalPage;
  } else {
    return 1;
  }
});
