import { Database } from "./schema";

export type Wines = Database["public"]["Tables"]["wines"]["Row"];

export type SmallArticleProps = Pick<
  Wines,
  "title" | "id" | "image_src" | "tags"
> &
  Pick<Database["public"]["Tables"]["categories"]["Row"], "chara">;

export type CategoryProps = Database["public"]["Tables"]["categories"]["Row"];
