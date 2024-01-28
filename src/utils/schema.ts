import { z } from "zod";

export const searchSchema = z.object({
  search: z
    .string()
    .min(4, { message: "4文字以上入力してください" })
    .max(60, { message: "60文字以下で入力してください" }),
  category: z.string(),
  sort: z.enum(["new", "inexpensive", "popular"]),
});
