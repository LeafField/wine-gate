import { Database } from "./schema";

export type Wines = Database["public"]["Tables"]["wines"]["Row"];

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
