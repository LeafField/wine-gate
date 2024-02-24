import { Database } from "./schema";

export type Wines = Database["public"]["Tables"]["wines"]["Row"];

export type WineProps = Wines & {
  categories: CategoryProps | null;
};

export type WineTitleProps = Pick<Wines, "title" | "id">;

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
  | "image_src"
> & {
  categories: CategoryProps | null;
} & {
  favorite?: {
    count: number;
  } | null;
};

export type WinePostType = Omit<
  Database["public"]["Tables"]["wines"]["Insert"],
  "id" | "created_at"
>;

export type SmallArticleProps = Pick<
  Wines,
  "title" | "id" | "image_src" | "tags"
> & {
  categories: Pick<
    Database["public"]["Tables"]["categories"]["Row"],
    "chara"
  > | null;
};

export type CategoryProps = Database["public"]["Tables"]["categories"]["Row"];
