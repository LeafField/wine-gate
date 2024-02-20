import { Database } from "./schema";

export type Wines = Database["public"]["Tables"]["wines"]["Row"];

export type WineProps = Wines & {
  categories: CategoryProps | null;
};

export type TasteBalanceProps = {
  sober_or_sweet: number;
  tart: number;
  fruity: number;
};

export type ArticleProps = Pick<
  Wines,
  | "title"
  | "sober_or_sweet"
  | "tart"
  | "fruity"
  | "author_name"
  | "tags"
  | "id"
  | "price"
> & {
  categories: CategoryProps;
};

export type WinePostType = Omit<
  Database["public"]["Tables"]["wines"]["Insert"],
  "id" | "created_at"
>;

export type SmallArticleProps = Pick<
  Wines,
  "title" | "id" | "image_src" | "tags"
> &
  Pick<Database["public"]["Tables"]["categories"]["Row"], "chara">;

export type CategoryProps = Database["public"]["Tables"]["categories"]["Row"];
